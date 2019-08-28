/**
 * @author Forestry Games
 */

var animData = {
	
	
	
	mc16:{view:'intro_BG.png', depth:0, startFrame:74, endFrame:89, position:[-25.6,1102.85,-25.6,837.55,-25.6,613.05,-25.6,429.35,-25.6,286.5,-25.6,184.5,-25.6,123.25,-25.6,102.85,-25.6,102.85,-25.6,102.85,-25.6,102.85,-25.6,102.85,-25.6,102.85,-25.6,102.85,-25.6,102.85]}, 
	mc1:{view:'testLineOutro.png', depth:1, startFrame:0, endFrame:8, position:[-20.55,444.5,-20.55,316.8,-20.55,189.1,-20.55,61.4,-20.55,-66.35,-20.55,-194.05,-20.55,-321.75,-20.55,-449.45], scale:[0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875]}, 
	mc2:{view:'testLineOutro.png', depth:1, startFrame:11, endFrame:19, position:[19.45,444.5,19.45,319.65,19.45,194.8,19.45,69.95,19.45,-54.9,19.45,-179.75,19.45,-304.6,19.45,-429.45], scale:[0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875]}, 
	mc3:{view:'testLineOutro.png', depth:2, startFrame:16, endFrame:22, position:[-210.55,444.5,-210.55,273.7,-210.55,102.9,-210.55,-67.85,-210.55,-238.65,-210.55,-409.45], scale:[0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875]}, 
	mc4:{view:'testLineOutro.png', depth:2, startFrame:19, endFrame:27, position:[-20.55,384.5,-20.55,276.8,-20.55,169.1,-20.55,61.4,-20.55,-46.35,-20.55,-154.05,-20.55,-261.75,-20.55,-369.45], scale:[0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875]}, 
	mc5:{view:'cloud.png', depth:0, startFrame:26, endFrame:58, position:[-58.95,580.15,-58.95,545.1,-58.95,510.1,-58.95,475.05,-58.95,440,-58.95,404.95,-58.95,369.9,-58.95,334.85,-58.95,299.8,-58.95,264.8,-58.95,229.75,-58.95,194.7,-58.95,159.65,-58.95,124.65,-58.95,89.6,-58.95,54.55,-58.95,19.5,-58.95,-15.55,-58.95,-50.55,-58.95,-85.6,-58.95,-120.65,-58.95,-155.7,-58.95,-190.75,-58.95,-225.75,-58.95,-260.85,-58.95,-295.85,-58.95,-330.9,-58.95,-365.95,-58.95,-401,-58.95,-436,-58.95,-471.05,-58.95,-506.1], scale:[0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875]}, 
	mc6:{view:'cloud.png', depth:2, startFrame:29, endFrame:45, position:[61.05,693.9,61.05,613.9,61.05,533.9,61.05,453.9,61.05,373.9,61.05,293.9,61.05,213.9,61.05,133.9,61.05,53.9,61.05,-26.1,61.05,-106.1,61.05,-186.1,61.05,-266.1,61.05,-346.1,61.05,-426.1,61.05,-506.1], scale:[1.5,1.5,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.5,1.5], alpha:[0.69921875,0.71875,0.73828125,0.7578125,0.78125,0.80078125,0.8203125,0.83984375,0.859375,0.87890625,0.8984375,0.91796875,0.94140625,0.9609375,0.98046875,1]}, 
	mc7:{view:'testLineOutro.png', depth:3, startFrame:30, endFrame:38, position:[19.45,344.5,19.45,242.5,19.45,140.5,19.45,38.5,19.45,-63.45,19.45,-165.45,19.45,-267.45,19.45,-369.45], scale:[0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875]}, 
	mc8:{view:'testLineOutro.png', depth:4, startFrame:35, endFrame:41, position:[209.45,344.5,209.45,205.7,209.45,66.9,209.45,-71.85,209.45,-210.65,209.45,-349.45], scale:[0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875]}, 
	mc9:{view:'testLineOutro.png', depth:3, startFrame:43, endFrame:51, position:[-20.55,364.5,-20.55,262.5,-20.55,160.5,-20.55,58.5,-20.55,-43.45,-20.55,-145.45,-20.55,-247.45,-20.55,-349.45], scale:[0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875]}, 
	mc10:{view:'cloud.png', depth:2, startFrame:47, endFrame:65, position:[-283.45,693.9,-283.45,618.6,-283.45,543.3,-283.45,468,-283.45,392.75,-283.45,317.45,-283.45,242.15,-283.45,166.85,-283.45,91.55,-283.45,16.25,-283.45,-59.05,-283.45,-134.35,-283.45,-209.65,-283.45,-284.95,-283.45,-360.2,-283.45,-435.5,-283.45,-510.8,-283.45,-586.1], scale:[1.5,1.5,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.500030517578125,1.5,1.5], alpha:[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5]}, 
	mc11:{view:'cloud.png', depth:0, startFrame:49, endFrame:81, position:[181.05,580.15,181.05,545.1,181.05,510.1,181.05,475.05,181.05,440,181.05,404.95,181.05,369.9,181.05,334.85,181.05,299.8,181.05,264.8,181.05,229.75,181.05,194.7,181.05,159.65,181.05,124.65,181.05,89.6,181.05,54.55,181.05,19.5,181.05,-15.55,181.05,-50.55,181.05,-85.6,181.05,-120.65,181.05,-155.7,181.05,-190.75,181.05,-225.75,181.05,-260.85,181.05,-295.85,181.05,-330.9,181.05,-365.95,181.05,-401,181.05,-436,181.05,-471.05,181.05,-506.1], scale:[0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875,0.6999969482421875], alpha:[1,0.984375,0.96875,0.953125,0.93359375,0.91796875,0.90234375,0.88671875,0.87109375,0.85546875,0.83984375,0.82421875,0.8046875,0.7890625,0.7734375,0.7578125,0.7421875,0.7265625,0.7109375,0.6953125,0.67578125,0.66015625,0.64453125,0.62890625,0.61328125,0.59765625,0.58203125,0.56640625,0.546875,0.53125,0.515625,0.5]}, 
	mc12:{view:'testLineOutro.png', depth:4, startFrame:54, endFrame:62, position:[19.45,344.5,19.45,248.2,19.45,151.95,19.45,55.65,19.45,-40.6,19.45,-136.9,19.45,-233.15,19.45,-329.45], scale:[0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875]}, 
	mc13:{view:'testLineOutro.png', depth:3, startFrame:62, endFrame:68, position:[-10.55,324.5,-10.55,189.7,-10.55,54.9,-10.55,-79.85,-10.55,-214.65,-10.55,-349.45], scale:[0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875,0.52020263671875]}, 
	mc14:{view:'packRear.png', depth:0, startFrame:71, endFrame:89, position:[-2,420.5,-2,280.95,-2,162.85,-2,66.25,-2,-8.9,-2,-62.55,-2,-94.75,-2,-105.5,-2,-105.5,-2,-105.5,-2,-105.5,-2,-105.5,-2,-105.5,-2,-105.5,-2,-105.5,-2,-105.5,-2,-105.5,-2,-105.5]}, 
	//mc17:{view:'whiteGradient.png', depth:1, startFrame:74, endFrame:85, position:[-30.6,662.85,-25.25,396.95,-25.2,171.95,-25.25,-12.15,-25.25,-155.3,-25.3,-257.6,-25.25,-318.95,-30.6,-339.4,-25.85,-392.75,-25.85,-446.05,-30.6,-499.4], scale:[239.88873291015625,1,238.62222290039063,1,237.69248962402344,1,236.93478393554688,1,236.345458984375,1,235.9208526611328,1,235.66827392578125,1,235.75186157226563,1,235.7626495361328,1,235.7626495361328,1,235.75186157226563,1]}, 
	mc18:{view:'packShadow.png', depth:2, startFrame:77, endFrame:89, position:[-0.5,260,-0.5,260,-0.5,260,-0.5,260,-0.5,260,-0.5,260,-0.5,260,-0.5,260,-0.5,260,-0.5,260,-0.5,260,-0.5,260]}, 
	mc19:{view:'McBite.png', depth:6, startFrame:79, endFrame:88, position:[-30,-2.85,-57.8,-30.65,-74.5,-47.25,-80,-52.85,-80.45,-50.85,-81.6,-44.9,-83.6,-34.85,-86.45,-20.9,-90,-2.85], scale:[0.5749868879948276,0.5749868879948276,0.5745822234987104,0.5745822234987104,0.5744250492191856,0.5744250492191856,0.5749929670057295,0.5749929670057295,0.5741578255498468,0.5741578255498468,0.5741403497401855,0.5741403497401855,0.5741159777324942,0.5741159777324942,0.5740616238366861,0.5740616238366861,0.5749774230341977,0.5749774230341977], rotation:[66.74151611328125,12.821273803710938,-19.082916259765625,-29.998565673828125,-30.572891235351563,-32.34239196777344,-35.34825134277344,-39.599822998046875,-44.99781799316406]}, 
	mc0:{view:'McBite2.png', depth:0, startFrame:0, endFrame:89, position:[0,-398,0,-359.35,0,-322.45,0,-287.25,0,-253.75,0,-222,0,-191.95,0,-163.65,0,-137,0,-112.1,0,-88.95,0,-67.5,0,-47.75,0,-29.7,0,-13.4,0,1.2,0,14.1,0,25.25,0,34.7,0,42.4,0,48.4,0,52.7,0,55.3,0,56.15,0,49.75,0,43.95,0,38.65,0,33.95,0,29.75,0,26.15,0,23.1,0,20.6,0,18.65,0,17.25,0,16.45,0,16.15,0,16.35,0,16.95,0,18.1,0,19.75,0,22.05,0,25.1,0,28.9,0,33.45,0,38.6,0,44.05,0,49.4,0,54.2,0,58.15,0,61.3,0,63.55,0,65.05,0,65.9,0,66.15,0,65.1,0,61.6,0,55.1,0,45,0,30.8,0,13.05,0,-6.25,0,-23.75,0,-37.15,0,-45.9,0,-50.65,0,-52.05,0,-51.5,0,-49.95,0,-47.3,0,-43.6,0,-38.85,0,-33.05,0,-26.2,0,-18.25,0,-9.3,0,0.75,0,11.8,0,23.95,0,37.15,0,37.15,0,37.15,0,-2.85,0,-30.65,0,-47.3,0,-52.85,0,-49.25,0,-38.45,0,-20.45,0,4.75], scale:[0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875,0.5749969482421875]}, 
	mc20:{view:'McBite.png', depth:7, startFrame:80, endFrame:89, position:[31,12,52.1,-24,64.8,-45.65,69,-52.8,70.05,-50.5,73.1,-43.7,78.35,-32.4,85.65,-16.35,95,4.15], scale:[0.5749861024260317,0.5749861024260317,0.5743002381616792,0.5743002381616792,0.5742013794435232,0.5742013794435232,0.5749950108752246,0.5749950108752246,0.5742031270856971,0.5742031270856971,0.5742694313769313,0.5742694313769313,0.5743995751986338,0.5743995751986338,0.574650407998059,0.574650407998059,0.5749969482421875,0.5749969482421875], rotation:[74.99862670898438,66.7001953125,61.68678283691406,59.99882507324219,61.193084716796875,64.91671752929688,70.93035888671875,79.23092651367188,90]},
	mc15:{view:'packFront.png', depth:3, startFrame:71, endFrame:89, position:[-0.5,587,-0.5,447.45,-0.5,329.35,-0.5,232.75,-0.5,157.6,-0.5,103.95,-0.5,71.75,-0.5,61,-0.5,61,-0.5,61,-0.5,61,-0.5,61,-0.5,61,-0.5,61,-0.5,61,-0.5,61,-0.5,61,-0.5,61]}
}

var GAME = GAME || {};

GAME.GameoverAnimation = function()
{
		      
	PIXI.DisplayObjectContainer.call(this);//
	
	this.sprites = [];
	for (var i in animData) 
	{
		var data = animData[i];
		
		
		if(data.view == "McBite2.png")
		{
			var textures = [];
			
			for (var i=0; i < 15; i++) {
				  var number = i + 1;
				  if(number < 10)number = "0" + number;
				  textures.push(PIXI.Texture.fromFrame("bitesFrames_"+ number + ".png"));
			};	
			var sprite = new PIXI.MovieClip(textures);
			sprite.animationSpeed = 0.5;
			sprite.play();
		}
		else if(data.view == "intro_BG.png")
		{
			var sprite = PIXI.Sprite.fromImage(REMOTE_PATH + "img/UI/intro_BG.jpg");
			var grad = PIXI.Sprite.fromFrame("whiteGradient.png");
			grad.width = 1024;
			grad.anchor.x = 0.5;
			grad.position.y = -1024/2;
			this.grad = grad;
			this.bg = sprite;
			this.bg.addChild(grad);
				
		//	var sprite2 = PIXI.Sprite.fromFrame(data.view);
		//	sprite.addChild(sprite2);
			
		}
		else
		{
			var sprite = PIXI.Sprite.fromFrame(data.view);// + ".png");
		}
		
		
		this.addChild(sprite);
		data.sprite = sprite;
		data.sprite.anchor.x = data.sprite.anchor.y = 0.5;
		sprite.visible = false;
	};
	
	this.currentFrame = 0;
}

// constructor
GAME.GameoverAnimation.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );

GAME.GameoverAnimation.prototype.updateTransform = function()
{
	
	this.currentFrame += 0.5 * 1.2//* TIME.DELTA_TIME;
//	this.currentFrame %= 45;

	if(this.currentFrame >= 88)
	{
		this.currentFrame = 88;
	//	this.parent.removeChild(this);
	
		if(this.onComplete)this.onComplete();
		//return;
	}
	
	var position = this.currentFrame//(stage.interactionManager.mouse.global.x / GAME.width) * 45/// //this.currentFrame;
	
	position = Math.round(position);
	
	for(var i in animData)
	{
		var data = animData[i];
	
		
		if(position >= data.startFrame && position < data.endFrame)
		{
			//trace(">>")
			data.sprite.visible = true;
			//data.sprite.alpha  =0.5;
			var frameindex = position-data.startFrame;
			var lowIndex = Math.floor(frameindex);
			var highIndex = Math.round(frameindex);
			
			var ratio = frameindex - lowIndex;
			
			// x pos
			var positionX1 =  data.position[lowIndex * 2];
			var positionX2 =  data.position[highIndex * 2];
			
			var interX = positionX1 + (positionX2 - positionX1) * ratio;
			
			// y pos
			
			var positionY1 =  data.position[lowIndex * 2 + 1];
			var positionY2 =  data.position[highIndex * 2 + 1];
			
			var interY = positionY1 + (positionY2 - positionY1) * ratio;
			
			data.sprite.position.x = positionX1// interX
			data.sprite.position.y = positionY1//interY
			
			var interScaleX = 1;
			var interScaleY = 1;
			
			if(data.scale)
			{
				var scaleX1 =  data.scale[lowIndex * 2];
				var scaleX2 =  data.scale[highIndex * 2];
				
				interScaleX = scaleX1 + (scaleX2 - scaleX1) * ratio;
				
				var scaleY1 =  data.scale[lowIndex * 2 + 1];
				var scaleY2 =  data.scale[highIndex * 2 + 1];
				
				interScaleY = scaleY1 + (scaleY2 - scaleY1) * ratio;
				
				data.sprite.scale.x = interScaleX;
				data.sprite.scale.y = interScaleY;
			}
			
			
			
			
			var interAlpha = 1;
			
			if(data.alpha)
			{
				var alpha1 =  data.alpha[lowIndex];
				var alpha2 =  data.alpha[highIndex];
				
				
				interAlpha = alpha1 + (alpha2 - alpha1) * ratio;
				
			}
			
			data.sprite.alpha = interAlpha
			
			if(data.rotation)
			{
				
				var rotation1 =  data.rotation[lowIndex];
				var rotation2 =  data.rotation[highIndex];
				
				interRotation = rotation1 + (rotation2 - rotation1) * ratio;
				data.sprite.rotation = interRotation * (Math.PI / 180)
			}
		

		}
		else
		{
			data.sprite.visible = false;
			
		}
	}
	
	PIXI.DisplayObjectContainer.prototype.updateTransform.call(this)
	
	
}

GAME.GameoverAnimation.prototype.resize = function(w, h)
{
	this.bg.width = w;
	this.bg.scale.y = this.bg.scale.x;

}

