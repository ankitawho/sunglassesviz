function setup() {
    createCanvas(460, 650);
    angleMode(DEGREES);
  }
  
  function draw() {
    
    background('#D8C6B9')
     
   noFill();
    stroke('#857B6F');
    strokeWeight(2);
    if (mouseX < 160 && mouseIsPressed)
      {
        push();
        rotate(-0.0015*mouseX);
     rect(25 , 32 ,405,595);
      pop();
      }
    
  else rect(25, 32, 405, 595);
    //rect(25, 32, 405, 595);
    
    if (mouseX < 160 && mouseIsPressed)
      {
        rotate(0.0015*mouseX);
      }
  
    
    noFill();
    stroke('#857B6F');
    strokeWeight(2);
    beginShape();
    vertex(319.5, 587.5);
    vertex(292.5, 546.5);
    vertex(257, 587.5);
    endShape(CLOSE);
    
    fill('#141015');
    noStroke();
    beginShape();
    vertex(319.5, 587.5);
    vertex(292.5, 546.5);
    vertex(257, 587.5);
    endShape(CLOSE);
    beginShape();
    vertex(114.5, 568.5);
    vertex(114.5, 601.5);
    vertex(72.5, 601.5);
    endShape(CLOSE);
    
    fill('#141015');
    noStroke();
    rect(127,50,26,40);
    
    fill('#3F739B');
    rect(153,56,39,34);
    rect(151,93,32,39);
    
    fill('#141015');
    noStroke();
     if (mouseX < 160 && mouseIsPressed)
      {
     rect(175 , 89 - mouseX/100 ,19,25/1.5 + mouseX/100);
      }
  else rect(175,89,19,25);
    //rect(175,89,19,25);
    
    fill('#3F739B');
    noStroke();
    rect(135,93,14,39);
    
    fill('#3F739B');
    noStroke();
      if (mouseX < 160 && mouseIsPressed)
      {
     rect(52 - 0.075*(width - mouseX), 131,50,63);
      }
  else rect(52,131,50,63);
    
    
    //torso
    rect(96,154,111,24);
    rect(107,170,84,48);
    rect(212,148,70,33);
    
    //the other arm
    
    fill('#141015');
    noStroke();
    beginShape();
    vertex(369.5, 117.5);
    vertex(378, 126.5);
    vertex(378, 205);
    vertex(369.5, 210.5);
    endShape(CLOSE);
    
  
    fill('#3F739B');
    noStroke();
    rect(140,148,67,46);
    rect(277,151,101,27);
    rect(349,146,38,10);
    
    stroke('#99887E');
    strokeWeight(1);
    rect(370,156,20,9);
    rect(370,164,17,8);
    rect(370,171,17,8);
    rect(370,178,17,8);
    
    fill('#141015');
    noStroke();
    
     if (mouseX < 160 && mouseIsPressed)
      {
     rect(351 - 0.2*(width - mouseX), 154,33,9);
      }
  else rect(351,154,23,9);
    //rect(351,154,23,9);
    rect(117,223,14,46);
    beginShape();
    vertex(264, 280);
    vertex(273.5, 274.5);
    vertex(273.5, 303);
    vertex(264, 303);
    endShape(CLOSE);
    
    strokeWeight(2);
    
     stroke('#5D4C42');
      if (mouseX < 160 && mouseIsPressed)
  {
  line(250 , 23, 171- 0.2*(width - mouseX), 152.5);
  }
  else line(250, 23, 171, 152.5);
     stroke('#141015');
       if (mouseX < 160 && mouseIsPressed)
  {
  line(171- 0.2*(width - mouseX) , 152.5, 264, 302.5);
  }
  else line(171, 152.5, 264, 302.5);
    //line(250, 23, 171, 152.5);
    //line(171, 152.5, 264, 302.5);
    
    //arm
    fill('#3F739B');
    noStroke();
    
      if (mouseX < 160 && mouseIsPressed)
  {
  rect(101 - 0.15*(width - mouseX), 131, 39, 13);
  }
  else rect(101,131,39,13);
   //rect(101,131,39,13);
    
    fill('#141015');
    noStroke();
    
   if (mouseX < 160 && mouseIsPressed)
  {
  rect(76 - 0.025*(width - mouseX), 157,46,21);
  }
  else rect(76,157,46,21);
    //rect(76,157,46,21);
    rect(187,179,18,46);
    rect(117,223,14,46);
    
    if (mouseX < 160 && mouseIsPressed)
  {
  rect(53 , 275- 0.025*(width - mouseX),21,62);
  }
  else rect(53,275,21,62);
    //rect(53,275,21,62);
    
    fill('#141015');
    noStroke();
    beginShape();
    vertex(218.5, 316);
    vertex(194, 276);
    vertex(145, 291.5);
    vertex(124.5, 336.5);
    vertex(160.5, 384);
    endShape(CLOSE);
    
    fill('#3F739B');
    noStroke();
    rect(123,275,71,62);
    rect(102,457,34,67);
    rect(109,521,25,81);
    
     if (mouseX < 160 && mouseIsPressed)
      {
        rotate(-0.0010*mouseX);
      }
  
     if (mouseX < 160 && mouseIsPressed)
      {
    beginShape();
    vertex(285 + 0.015*(width - mouseX), 340);
    vertex(285+ 0.015*(width - mouseX), 425.16);
    vertex(383+ 0.015*(width - mouseX), 590);
    vertex(383+ 0.015*(width - mouseX), 340);
    endShape(CLOSE);
      }
    
    else{
    beginShape();
    vertex(285, 340);
    vertex(285, 425.16);
    vertex(383, 590);
    vertex(383, 340);
    endShape(CLOSE);
    }
    
  fill('#D8C6B9');
    if (mouseX < 160 && mouseIsPressed)
      {
   // fill('#DBCBBB');
    rect(335 + 0.015*(width - mouseX),347,10,38);
    rect(361  + 0.015*(width - mouseX),347,10,38);
    rect(335  + 0.015*(width - mouseX),388,10,34);
    rect(335  + 0.015*(width - mouseX),425,10,39);
    rect(361  + 0.015*(width - mouseX),478,10,25);
    rect(335  + 0.015*(width - mouseX),477,10,26);
    rect(347  + 0.015*(width - mouseX),388,22,9);
    rect(347  + 0.015*(width - mouseX),400,14,8);
    rect(347  + 0.015*(width - mouseX),414,22,8);
    rect(335  + 0.015*(width - mouseX),468,36,8);
    rect(347  + 0.015*(width - mouseX),486,12,8);
    rect(347  + 0.015*(width - mouseX),363,12,8);
    beginShape();
    vertex(362.5  + 0.015*(width - mouseX), 427.5);
    vertex(371  + 0.015*(width - mouseX), 427.5);
    vertex(357  + 0.015*(width - mouseX), 444);
    vertex(347.5  + 0.015*(width - mouseX), 444);
    endShape(CLOSE);
    beginShape();
    vertex(348  + 0.015*(width - mouseX), 447);
    vertex(355.9  + 0.015*(width - mouseX), 447);
    vertex(370  + 0.015*(width - mouseX), 464);
    vertex(361.11  + 0.015*(width - mouseX), 464);
    endShape(CLOSE);
      }
    
    else
      {
    //letteringHEKA
    //fill('#DBCBBB');
    rect(335,347,10,38);
    rect(361,347,10,38);
    rect(335,388,10,34);
    rect(335,425,10,39);
    rect(361,478,10,25);
    rect(335,477,10,26);
    rect(347,388,22,9);
    rect(347,400,14,8);
    rect(347,414,22,8);
    rect(335,468,36,8);
    rect(347,486,12,8);
    rect(347,363,12,8);
    beginShape();
    vertex(362.5, 427.5);
    vertex(371, 427.5);
    vertex(357, 444);
    vertex(347.5, 444);
    endShape(CLOSE);
    beginShape();
    vertex(348, 447);
    vertex(355.9, 447);
    vertex(370, 464);
    vertex(361.11, 464);
    endShape(CLOSE);
      }
    
     
    
    //thigh
    fill('#3F739B');
    noStroke();
    beginShape();
    vertex(219, 364.5);
    vertex(219, 315.5);
    vertex(184, 315.5);
    vertex(94.5, 446.5);
    vertex(148.5, 446.5);
    endShape(CLOSE);
    
    //second leg
    fill('#3F739B');
    noStroke();
    beginShape();
    vertex(255.5, 432.5);
    vertex(223, 376.5);
    vertex(186, 418.5);
    vertex(219.3, 462.5);
    endShape(CLOSE);
    beginShape();
    vertex(280, 486);
    vertex(250.67, 436.5);
    vertex(219.3, 462.5);
    vertex(254.35, 509.5);
    endShape(CLOSE);
    beginShape();
    vertex(332, 587.5);
    vertex(200, 403.5);
    vertex(186.5, 418.5);
    vertex(312.5, 587.5);
    endShape(CLOSE);
    
    fill('#141015');
    noStroke();
      if (mouseX < 160 && mouseIsPressed)
  {
    
    beginShape();
    vertex(386 -0.2*(width - mouseX), 148);
    vertex(404.5 -0.2*(width - mouseX), 157);
    vertex(386 -0.2*(width - mouseX), 170);
    endShape(CLOSE);
  rect(52 - 0.075*(width - mouseX), 131,50,63);
  }
  else
    {
    
    beginShape();
    vertex(386, 148);
    vertex(404.5, 157);
    vertex(386, 170);
    endShape(CLOSE);
    }
    
    
    //arrow
    
    fill('#DCD3CA');
    noStroke();
    if (mouseX < 160 && mouseIsPressed)
      {
        rect(167 - 0.2*(width - mouseX), 155, 236, 5);
        }
    else rect(167,155,236,5);
    
   //hand
    fill('#3F739B');
    stroke('#99887E');
    strokeWeight(1);
    
    if (mouseX < 160 && mouseIsPressed)
  {
  rect(136 - 0.15*(width - mouseX), 131, 11, 26);
  }
  else rect(136,131,11,26);
    
    //rect(136,131,11,26);
      if (mouseX < 160 && mouseIsPressed)
  {
  rect(146 - 0.15*(width - mouseX), 131, 11, 26);
  }
  else rect(146,131,11,26);
    
      if (mouseX < 160 && mouseIsPressed)
  {
  rect(156 - 0.15*(width - mouseX), 131, 11, 26);
  }
  else rect(156,131,11,26);
    
    
      if (mouseX < 160 && mouseIsPressed)
  {
  rect(166 - 0.15*(width - mouseX), 131, 11, 26);
  }
  else rect(166,131,11,26);
    
    //rect(146,131,11,26);
    //rect(156,131,11,26);
    //rect(166,131,11,26);
  rect(117,223,77,46);
    
    
      
    
    
    
    
    
    
    
   
    
    
  }