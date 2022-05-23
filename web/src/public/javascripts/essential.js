function writeMainTab(){
    var mainTab="";
    mainTab += "<section class=\"main-tab\">";
    mainTab += "      <button class='btn tab pill' value=\"\" id=\"tab1\" onclick=\"goToPage('tab1')\"> Home <\/button>";
    mainTab += "      <button  class='btn tab pill' value=\"KVP\" id=\"tab2\" onclick=\"goToPage('tab2')\"> Product <\/button>";
    mainTab += "      <button  class='btn tab pill' value=\"UIMockup\" id=\"tab3\" onclick=\"goToPage('tab3')\"> UI Mockup <\/button>";
    mainTab += "      <button  class='btn tab pill' value=\"IA\" id=\"tab4\" onclick=\"goToPage('tab4')\"> Information Architecture <\/button>";
    mainTab += "      <button  class='btn tab pill' value=\"ID\" id=\"tab5\" onclick=\"goToPage('tab5')\"> Interaction Design <\/button>";
    mainTab += "      <button  class='btn tab pill' value=\"CostRev\" id=\"tab6\" onclick=\"goToPage('tab6')\"> Cost & Revenue <\/button>";
    mainTab += "";
    mainTab += "    <\/section>";
    mainTab += "    <div class='title' id=\"title\">";
    mainTab += "      <h1> Pill Care<sup>TM<\/sup> <\/h1>";
    mainTab += "      <p> Caring in Your Family!<\/p>";
    mainTab += "    <\/div>";
  document.getElementById("maintab").innerHTML = mainTab;
  }


writeMainTab()