import React, { useEffect, useRef } from 'react';

interface Node {
  id: string;
  x: number;
  y: number;
  type: 'central' | 'branch' | 'endpoint';
  connections: string[];
}

interface DataPacket {
  id: string;
  fromNode: string;
  toNode: string;
  progress: number;
  color: string;
}

const DataVisualization: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const packetsRef = useRef<DataPacket[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize nodes for centralized system
    const initializeNodes = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      const nodes: Node[] = [
        // Central hub
        {
          id: 'central',
          x: centerX,
          y: centerY,
          type: 'central',
          connections: ['branch1', 'branch2', 'branch3', 'branch4', 'branch5', 'branch6']
        }
      ];

      // Branch nodes in a circle around center
      const branchCount = 6;
      const radius = Math.min(canvas.width, canvas.height) * 0.25;
      
      for (let i = 0; i < branchCount; i++) {
        const angle = (i / branchCount) * 2 * Math.PI;
        const branchId = `branch${i + 1}`;
        
        nodes.push({
          id: branchId,
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
          type: 'branch',
          connections: ['central', `endpoint${i + 1}a`, `endpoint${i + 1}b`]
        });

        // Endpoint nodes for each branch
        const endpointRadius = radius * 0.6;
        nodes.push({
          id: `endpoint${i + 1}a`,
          x: centerX + Math.cos(angle - 0.3) * (radius + endpointRadius),
          y: centerY + Math.sin(angle - 0.3) * (radius + endpointRadius),
          type: 'endpoint',
          connections: [branchId]
        });

        nodes.push({
          id: `endpoint${i + 1}b`,
          x: centerX + Math.cos(angle + 0.3) * (radius + endpointRadius),
          y: centerY + Math.sin(angle + 0.3) * (radius + endpointRadius),
          type: 'endpoint',
          connections: [branchId]
        });
      }

      nodesRef.current = nodes;
    };

    // Create data packets
    const createDataPacket = () => {
      const nodes = nodesRef.current;
      if (nodes.length === 0) return;

      const colors = ['#3B82F6', '#1D4ED8', '#2563EB', '#1E40AF'];
      const fromNode = nodes[Math.floor(Math.random() * nodes.length)];
      const toNodeId = fromNode.connections[Math.floor(Math.random() * fromNode.connections.length)];
      
      if (toNodeId) {
        packetsRef.current.push({
          id: Math.random().toString(36).substr(2, 9),
          fromNode: fromNode.id,
          toNode: toNodeId,
          progress: 0,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const nodes = nodesRef.current;
      const packets = packetsRef.current;

      // Draw connections
      ctx.strokeStyle = '#E5E7EB';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      
      nodes.forEach(node => {
        node.connections.forEach(connectionId => {
          const targetNode = nodes.find(n => n.id === connectionId);
          if (targetNode) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(targetNode.x, targetNode.y);
            ctx.stroke();
          }
        });
      });

      ctx.setLineDash([]);

      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        
        let radius, fillColor, strokeColor;
        switch (node.type) {
          case 'central':
            radius = 12;
            fillColor = '#1D4ED8';
            strokeColor = '#1E40AF';
            break;
          case 'branch':
            radius = 8;
            fillColor = '#3B82F6';
            strokeColor = '#2563EB';
            break;
          case 'endpoint':
            radius = 6;
            fillColor = '#60A5FA';
            strokeColor = '#3B82F6';
            break;
        }

        ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = fillColor;
        ctx.fill();
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Add pulsing effect for central node
        if (node.type === 'central') {
          const pulseRadius = radius + Math.sin(Date.now() * 0.005) * 4;
          ctx.beginPath();
          ctx.arc(node.x, node.y, pulseRadius, 0, 2 * Math.PI);
          ctx.strokeStyle = '#3B82F6';
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.3;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      });

      // Update and draw data packets
      packets.forEach((packet, index) => {
        const fromNode = nodes.find(n => n.id === packet.fromNode);
        const toNode = nodes.find(n => n.id === packet.toNode);
        
        if (fromNode && toNode) {
          packet.progress += 0.02;
          
          if (packet.progress >= 1) {
            packets.splice(index, 1);
            return;
          }

          const x = fromNode.x + (toNode.x - fromNode.x) * packet.progress;
          const y = fromNode.y + (toNode.y - fromNode.y) * packet.progress;

          // Draw data packet
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, 2 * Math.PI);
          ctx.fillStyle = packet.color;
          ctx.fill();
          
          // Add glow effect
          ctx.shadowColor = packet.color;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, 2 * Math.PI);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Create new packets periodically
      if (Math.random() < 0.1) {
        createDataPacket();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    initializeNodes();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-20"
      style={{ background: 'transparent' }}
    />
  );
};

export default DataVisualization;