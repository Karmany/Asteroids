function draw_grid(t,e,l,i,a){e=e||10,l=l||5*e,i=i||"#00FF00",a=a||"#009900",t.save(),t.strokeStyle=i,t.fillStyle=a;for(var o=t.canvas.width,h=t.canvas.height,n=0;n<o;n+=e)t.beginPath(),t.moveTo(n,0),t.lineTo(n,h),t.lineWidth=n%l==0?.5:.25,t.stroke(),n%l==0&&t.fillText(n,n,10);for(var r=0;r<h;r+=e)t.beginPath(),t.moveTo(0,r),t.lineTo(o,r),t.lineWidth=r%l==0?.5:.25,t.stroke(),r%l==0&&t.fillText(r,0,r+10);t.restore()}function draw_pacman(t,e,l,i,a){t.beginPath(),t.arc(e,l,i,a*Math.PI,1.8*Math.PI),t.lineTo(200,200),t.fillStyle="yellow",t.fill(),t.closePath(),t.strokeStyle="#000000",t.lineWidth=2,t.stroke()}function draw_ship(t,e,l,i,a){a=a||{},t.save(),a.guide&&(t.strokeStyle="white",t.fillStyle="rgba(0, 0, 0, 0.25)",t.lineWidth=.5,t.beginPath(),t.arc(e,l,i,0,2*Math.PI),t.stroke(),t.fill()),t.lineWidth=a.lineWidth||2,t.strokeStyle=a.stroke||"white",t.fillStyle=a.fill||"black";var o=(a.angle||.5*Math.PI)/2;t.beginPath(),t.moveTo(e+i,l),t.lineTo(e+Math.cos(Math.PI-o)*i,l+Math.sin(Math.PI-o)*i),t.lineTo(e+Math.cos(Math.PI+o)*i,l+Math.sin(Math.PI+o)*i),t.closePath(),t.fill(),t.stroke(),t.restore()}