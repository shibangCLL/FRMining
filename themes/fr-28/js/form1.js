// JavaScript Document
document.writeln("<style type=\"text/css\">.message table{ border-collapse: collapse;}");
document.writeln(".message table td{ padding:4px; border:1px solid #cccccc;}");
document.writeln(".message table td input{border:1px solid #999999; padding:2px 5px;}");
document.writeln(".message table td input[type=\"submit\"]{ padding:5px; cursor:pointer;}");
document.writeln(".message table td select{ border:1px solid #999999;}");
document.writeln(".message table td textarea{ border:1px solid #999999;}</style>");
document.writeln("<div class=\"message\">");
document.writeln("<p>Please write your name and message and do not forget to email and / or phone if you would like to be contacted. Please note that you do not need to have an e-mail program to use this feature.</p>");
document.writeln("<form class=\"form-horizontal\" method=\"post\" name=\"form\" action=\"http://inquiry.zenithcrusher.com/updata.php\" onsubmit=\"return(CheckfootInput())\">");
document.writeln("<table>");
document.writeln("<tr>");
document.writeln("<td width=\"80\">Products |:<span class=\"red\">*</span></td>");
document.writeln("<td><select name=\"products\" class=\"input-xlarge\">");
document.writeln("<option selected=\"selected\" value=\"\" style=\"color:#ff0000; font-weight:bold;\">Please, choose!</option>");
document.writeln("<option value=\"Mobile crushing plant\">Mobile crushing plant</option>");
document.writeln("<option value=\"LM Vertical Grinding Mill\">LM Vertical Grinding Mill</option>");
document.writeln("<option value=\"PEW Series Jaw Crusher\">PEW Series Jaw Crusher</option>");
document.writeln("<option value=\"HP Series Cone Crusher\">HP Series Cone Crusher</option>");
document.writeln("<option value=\"MTW European Grinding Machine\">MTW European Grinding Machine</option>");
document.writeln("<option value=\"XZM Series Ultrafine Mill\">XZM Series Ultrafine Mill(XZM)</option>");
document.writeln("<option value=\"PFW Series Impact Crusher (hydraulic)\">PFW Series Impact Crusher (hydraulic)</option>");
document.writeln("<option value=\"Sand MakeVSI Crusher\">Sand MakeVSI Crusher</option>");
document.writeln("<option value=\"Hydraulic Cylinder Cone Crusher\">Hydraulic Cylinder Cone Crusher</option>");
document.writeln("<option value=\"Sand WКакhing Machine\">Sand WКакhing Machine</option>");
document.writeln("<option value=\"Vibrating Screen\">Vibrating Screen </option>");
document.writeln("<option value=\"Vibrating Feeder\">Vibrating Feeder </option>");
document.writeln("<option value=\"Belt Conveyor\">Belt Conveyor</option>");
document.writeln("<option value=\"Stone processing production line\">Stone processing production line</option>");
document.writeln("<option value=\"Industrial milling production line\">Industrial milling production line</option>");
document.writeln("<option value=\"Beneficiation Production Line\">Beneficiation Production Line</option>");
document.writeln("<option value=\"Not Sure\" style=\"color:#ff0000; font-weight:bold;\">Not Sure!</option>");
document.writeln("</select></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td valign=\"top\">Materials:<span class=\"red\">*</span></td>");
document.writeln("<td><label class=\" inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Basalt\">");
document.writeln("Basalt</label>");
document.writeln("<label class=\" inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Barite\">");
document.writeln("Barite</label>");
document.writeln("<label class=\" inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Bentonite\">");
document.writeln("Bentonite</label>");
document.writeln("<label class=\" inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Calcite\">");
document.writeln("Calcite</label>");
document.writeln("<label class=\" inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Coal\">");
document.writeln("Coal</label>");
document.writeln("<label class=\" inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Copper\">");
document.writeln("Copper</label>");
//document.writeln("<br />");
document.writeln("<label class=\" inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Dolomite\">");
document.writeln("Dolomite</label>");
//document.writeln("<br />");
document.writeln("<label class=\" inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Feldspar\">");
document.writeln("Feldspar</label>");
document.writeln("<label class=\" inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Gypsum\">");
document.writeln("Gypsum</label>");
document.writeln("<label class=\" inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Gravel\">");
document.writeln("Gravel</label>");
document.writeln("<label class=\" inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Granite\">");
document.writeln("Granite</label>");
//document.writeln("<br />");
document.writeln("<label class=\" inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Quartz\">");
document.writeln("Quartz</label>");
document.writeln("<label class=\" inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Pebble\">");
document.writeln("Pebble</label>");
document.writeln("<label class=\" inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Slag\">");
document.writeln("Slag</label>");
//document.writeln("<br />");
document.writeln("<label class=\" inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Limestone\">");
document.writeln("Limestone</label>");
document.writeln("<br />");
document.writeln("<label class=\" inline\">");
document.writeln("other:</label>");
document.writeln("<input name=\"title\" type=\"text\" value=\"\" size=\"10\" class=\"title\" /></td>");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<td>Capacity:<span class=\"red\">*</span></td>");
document.writeln("<td><!-- Multiple Radios -->");
document.writeln("<label class=\" inline\">");
document.writeln("<input type=\"radio\" value=\" > 100 TPH \" name=\"capacity[]\">");
document.writeln("> 100 TPH </label>");
document.writeln("<label class=\" inline\">");
document.writeln("<input type=\"radio\" value=\" > 50 TPH \" name=\"capacity[]\">");
document.writeln("> 50 TPH </label>");
document.writeln("<label class=\" inline\">");
document.writeln("<input type=\"radio\" value=\" > 30 TPH \" name=\"capacity[]\">");
document.writeln("> 30 TPH </label>");
//document.writeln("<br />");
document.writeln("<label class=\" inline\">");
document.writeln("<input type=\"radio\" value=\" > 10 TPH \" name=\"capacity[]\">");
document.writeln("> 10 TPH </label>");
document.writeln("<label class=\" inline\">");
document.writeln("<input type=\"radio\" value=\" > 1 TPH \" name=\"capacity[]\">");
document.writeln("> 1 TPH </label>");
document.writeln("<label class=\" inline\">");
document.writeln("<input type=\"radio\" value=\" < 1 TPH \" name=\"capacity[]\">");
document.writeln("< 1 TPH </label>");
document.writeln("</td>");

document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td>Name:<span class=\"red\">*</span></td>");
document.writeln("<td><input name=\"name\" type=\"text\" value=\"such as: John\" style=\"color: rgb(153, 153, 153);\" onblur=\"if(value==\'\'){value=\'such as: John\';this.style.color=\'#999\';};\" onfocus=\"if(value==\'such as: John\'){value=\'\';this.style.color=\'#000\';};\" size=\"25\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td>Email:<span class=\"red\">*</span></td>");
document.writeln("<td><input name=\"email\" type=\"text\" value=\"such as: cncrusher@gmail.com\" style=\"color: rgb(153, 153, 153);\" maxlength=\"50\" onblur=\"if(value==\'\'){value=\'such as: cncrusher@gmail.com\';this.style.color=\'#999\';};\" onfocus=\"if(value==\'such as: cncrusher@gmail.com\'){value=\'\';this.style.color=\'#000\';};\" size=\"25\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td>Phone:<span class=\"red\">*</span></td>");
document.writeln("<td><input name=\"phone\" type=\"text\" value=\"such as: 0086-21-58386256\" style=\"color: rgb(153, 153, 153);\" onblur=\"if(value==\'\'){value=\'such as: 0086-21-58386256\';this.style.color=\'#999\';};\" onfocus=\"if(value==\'such as: 0086-21-58386256\'){value=\'\';this.style.color=\'#000\';};\" size=\"25\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td valign=\"top\">Message:</td>");
document.writeln("<td><textarea name=\"content\" cols=\"45\" rows=\"6\" onblur=\"if(value==\'\'){value=\'Other requirements: output size as 0-10,10-15, 15-20 mm for crushing or 75 μm (200 mesh) for the mill machine and other requirements.\';this.style.color=\'#999\';};\" onfocus=\"if(value==\'Other requirements: output size as 0-10,10-15, 15-20 mm for crushing or 75 μm (200 mesh) for the mill machine and other requirements.\'){value=\'\';this.style.color=\'#000\';};\">Other requirements: output size as 0-10,10-15, 15-20 mm for crushing or 75 μm (200 mesh) for the mill machine and other requirements.</textarea></td>");
document.writeln("</tr>");
document.writeln("<tr><td></td>");

document.writeln("<td><input type=\"submit\" value=\"Submit\" /></td>");
document.writeln("</tr>");
document.writeln("</table>");
document.writeln("</form>");
document.writeln("</div>");
document.writeln("<h2>EMAIL:<a href=\"mailto:cncrusher@pejaw.com\">cncrusher@pejaw.com<\/a></h2>");

function is_number(str) {
exp = /[^0-9 .+()-]/g;
if (str.search(exp) != -1) {
return false;
}
return true;
}
function is_email(str) {
if ((str.indexOf("@") == -1) || (str.indexOf(".") == -1)) {
return false;
}
return true;
}
function CheckfootInput(){
if(document.form.products.value==""){
alert("Please Select A Product !");
document.form.products.focus();
return false;
}



if(document.form.name.value==''||document.form.name.value=='Such as: John'){
alert("Please fill out fields Name !");
document.form.name.focus();
return false;
}

if(document.form.email.value==''||document.form.email.value=='Such as: john@gmail.com'||!is_email(document.form.email.value)){
alert("Please fill out fields Email !");
document.form.email.focus();
return false;
}

if(document.form.phone.value==''||document.form.phone.value=='Such as: 0086-21-58386256'){
alert("Please fill out fields Phone !");
document.form.phone.focus();
return false;
}

if(document.form.content.value==''||document.form.content.value=='Other requirements: output size like 0-10,10-15, 15-20 mm for crushing or 75 microns ( 200 meshes) for mill machine and other requirements.'){
document.form.content.value=document.form.email.value+' '+document.form.name.value;
}
return true;
}