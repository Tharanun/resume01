function circleArea(radius){
    const area = 2 * (Math.PI * radius);
    return area;
}

function calculateArea() {
    let radius = prompt('กรอกรัศมี');
    radius = parseFloat(radius);
    let area = circleArea(radius);
    alert(`พื้นที่ของวงกลมที่มีรัศมี ${radius} คือ ${area.toFixed(1)}`);
}

