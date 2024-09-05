import React, { useEffect, useRef } from 'react';

const PieChart = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // 캔버스를 완전히 초기화
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const totalCommits = data.reduce((sum, member) => sum + member.commits, 0);

    // 각 멤버의 커밋 비율을 계산
    const percentages = data.map(member => (member.commits / totalCommits) * 100);

    let startAngle = 0;

    // 파이 그래프 그리기
    percentages.forEach((percentage, index) => {
      const sliceAngle = (percentage / 100) * 2 * Math.PI;
      const color = `hsl(${(index * 13) % 360}, 90%, 75%)`;

      // 파이 조각 그리기
      ctx.beginPath();
      ctx.moveTo(50, 50); // 원의 중심
      ctx.arc(50, 50, 50, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();

      // 파이 조각의 중간 각도 계산
      const midAngle = startAngle + sliceAngle / 2;
      
      // 텍스트 위치 계산 (원의 중심에서 약간 떨어진 위치)
      const textX = 50 + (27 * Math.cos(midAngle));
      const textY = 50 + (27 * Math.sin(midAngle));

      // 텍스트 스타일 설정
      ctx.fillStyle = 'black';
      ctx.font = 'normal 0.6em Pretendard-Light';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // 라벨 표시
      const label = `${data[index].name}`;
      ctx.fillText(label, textX, textY);

      startAngle += sliceAngle;
    });

  }, [data]);

  return (
    <div className='piechart' style={{ position: 'relative', width: '90px', height: '90px' }}>
      <canvas ref={canvasRef} width="100" height="100" />
    </div>
  );
};

export default PieChart;
