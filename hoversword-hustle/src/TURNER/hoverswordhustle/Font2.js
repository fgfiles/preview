HH.Font2 = function() {
    new HH.BitmapFontLoader2();
};

extend(HH.Font2, PIXI.AssetLoader);

HH.FontString2a = '<font>' +
'<info face="font2" size="82" bold="1" italic="0" charset="" unicode="" stretchH="100" smooth="1" aa="1" padding="2,2,2,2" spacing="0,0" outline="0"/>' +
'<common lineHeight="82" base="55" scaleW="292" scaleH="510" pages="1" packed="0"/>' +
'<pages>' +
'<page id="0" file="font2a.png"/>' +
'</pages>' +
'<chars count="104">' +
'<char id="1578" x="2" y="2" width="45" height="31" xoffset="0" yoffset="28" xadvance="41" page="0" chnl="15"/>' +
'<char id="1605" x="2" y="35" width="29" height="47" xoffset="0" yoffset="29" xadvance="23" page="0" chnl="15"/>' +
'<char id="32" x="2" y="84" width="0" height="0" xoffset="0" yoffset="55" xadvance="12" page="0" chnl="15"/>' +
'<char id="1573" x="2" y="86" width="14" height="54" xoffset="2" yoffset="15" xadvance="13" page="0" chnl="15"/>' +
'<char id="1610" x="2" y="142" width="38" height="49" xoffset="0" yoffset="29" xadvance="33" page="0" chnl="15"/>' +
'<char id="1602" x="18" y="84" width="40" height="46" xoffset="0" yoffset="26" xadvance="36" page="0" chnl="15"/>' +
'<char id="1575" x="33" y="35" width="13" height="44" xoffset="2" yoffset="15" xadvance="13" page="0" chnl="15"/>' +
'<char id="1601" x="48" y="35" width="48" height="38" xoffset="0" yoffset="21" xadvance="44" page="0" chnl="15"/>' +
'<char id="1604" x="2" y="193" width="36" height="53" xoffset="0" yoffset="15" xadvance="31" page="0" chnl="15"/>' +
'<char id="1593" x="2" y="248" width="32" height="50" xoffset="0" yoffset="26" xadvance="26" page="0" chnl="15"/>' +
'<char id="1576" x="2" y="300" width="45" height="37" xoffset="0" yoffset="33" xadvance="41" page="0" chnl="15"/>' +
'<char id="1577" x="36" y="248" width="21" height="36" xoffset="-1" yoffset="23" xadvance="15" page="0" chnl="15"/>' +
'<char id="1572" x="40" y="193" width="28" height="48" xoffset="-3" yoffset="24" xadvance="20" page="0" chnl="15"/>' +
'<char id="1611" x="36" y="286" width="15" height="11" xoffset="1" yoffset="2" xadvance="12" page="0" chnl="15"/>' +
'<char id="13" x="4" y="84" width="0" height="0" xoffset="0" yoffset="55" xadvance="12" page="0" chnl="15"/>' +
'<char id="1587" x="42" y="132" width="61" height="36" xoffset="0" yoffset="36" xadvance="56" page="0" chnl="15"/>' +
'<char id="1574" x="60" y="75" width="38" height="41" xoffset="0" yoffset="29" xadvance="33" page="0" chnl="15"/>' +
'<char id="1606" x="98" y="2" width="38" height="36" xoffset="-1" yoffset="36" xadvance="33" page="0" chnl="15"/>' +
'<char id="1608" x="100" y="40" width="28" height="37" xoffset="-3" yoffset="35" xadvance="20" page="0" chnl="15"/>' +
'<char id="1581" x="100" y="79" width="34" height="44" xoffset="0" yoffset="33" xadvance="28" page="0" chnl="15"/>' +
'<char id="1585" x="2" y="339" width="28" height="38" xoffset="-8" yoffset="34" xadvance="15" page="0" chnl="15"/>' +
'<char id="1583" x="130" y="40" width="26" height="32" xoffset="2" yoffset="27" xadvance="23" page="0" chnl="15"/>' +
'<char id="1584" x="2" y="379" width="26" height="41" xoffset="2" yoffset="18" xadvance="23" page="0" chnl="15"/>' +
'<char id="1603" x="2" y="422" width="46" height="44" xoffset="0" yoffset="15" xadvance="41" page="0" chnl="15"/>' +
'<char id="1590" x="32" y="339" width="63" height="43" xoffset="0" yoffset="29" xadvance="59" page="0" chnl="15"/>' +
'<char id="1591" x="53" y="286" width="46" height="44" xoffset="0" yoffset="15" xadvance="41" page="0" chnl="15"/>' +
'<char id="1571" x="70" y="170" width="15" height="51" xoffset="1" yoffset="8" xadvance="10" page="0" chnl="15"/>' +
'<char id="1609" x="59" y="243" width="38" height="41" xoffset="0" yoffset="29" xadvance="33" page="0" chnl="15"/>' +
'<char id="1580" x="87" y="170" width="34" height="44" xoffset="0" yoffset="33" xadvance="28" page="0" chnl="15"/>' +
'<char id="46" x="60" y="118" width="11" height="11" xoffset="3" yoffset="48" xadvance="13" page="0" chnl="15"/>' +
'<char id="1607" x="49" y="2" width="21" height="30" xoffset="-1" yoffset="30" xadvance="15" page="0" chnl="15"/>' +
'<char id="1567" x="2" y="468" width="29" height="40" xoffset="9" yoffset="19" xadvance="44" page="0" chnl="15"/>' +
'<char id="1589" x="33" y="468" width="63" height="37" xoffset="0" yoffset="35" xadvance="59" page="0" chnl="15"/>' +
'<char id="1588" x="99" y="216" width="61" height="45" xoffset="0" yoffset="27" xadvance="56" page="0" chnl="15"/>' +
'<char id="1594" x="50" y="384" width="32" height="58" xoffset="0" yoffset="18" xadvance="26" page="0" chnl="15"/>' +
'<char id="1582" x="84" y="384" width="34" height="53" xoffset="0" yoffset="24" xadvance="28" page="0" chnl="15"/>' +
'<char id="33" x="105" y="125" width="8" height="41" xoffset="3" yoffset="18" xadvance="11" page="0" chnl="15"/>' +
'<char id="34" x="70" y="223" width="14" height="16" xoffset="4" yoffset="16" xadvance="18" page="0" chnl="15"/>' +
'<char id="1569" x="72" y="2" width="22" height="24" xoffset="2" yoffset="37" xadvance="21" page="0" chnl="15"/>' +
'<char id="1586" x="97" y="332" width="28" height="46" xoffset="-8" yoffset="26" xadvance="15" page="0" chnl="15"/>' +
'<char id="1615" x="30" y="384" width="12" height="13" xoffset="2" yoffset="0" xadvance="12" page="0" chnl="15"/>' +
'<char id="1579" x="138" y="2" width="45" height="35" xoffset="0" yoffset="24" xadvance="41" page="0" chnl="15"/>' +
'<char id="1592" x="101" y="263" width="46" height="44" xoffset="0" yoffset="15" xadvance="41" page="0" chnl="15"/>' +
'<char id="40" x="98" y="439" width="19" height="55" xoffset="4" yoffset="13" xadvance="21" page="0" chnl="15"/>' +
'<char id="41" x="119" y="439" width="18" height="55" xoffset="4" yoffset="13" xadvance="21" page="0" chnl="15"/>' +
'<char id="1548" x="86" y="223" width="11" height="14" xoffset="4" yoffset="41" xadvance="16" page="0" chnl="15"/>' +
'<char id="1617" x="73" y="118" width="13" height="12" xoffset="1" yoffset="1" xadvance="12" page="0" chnl="15"/>' +
'<char id="88" x="115" y="125" width="36" height="41" xoffset="0" yoffset="19" xadvance="32" page="0" chnl="15"/>' +
'<char id="79" x="123" y="168" width="35" height="41" xoffset="1" yoffset="18" xadvance="33" page="0" chnl="15"/>' +
'<char id="112" x="136" y="74" width="26" height="41" xoffset="3" yoffset="29" xadvance="28" page="0" chnl="15"/>' +
'<char id="116" x="153" y="117" width="22" height="36" xoffset="0" yoffset="24" xadvance="18" page="0" chnl="15"/>' +
'<char id="101" x="158" y="39" width="27" height="30" xoffset="3" yoffset="29" xadvance="27" page="0" chnl="15"/>' +
'<char id="114" x="185" y="2" width="22" height="30" xoffset="4" yoffset="29" xadvance="22" page="0" chnl="15"/>' +
'<char id="111" x="164" y="71" width="27" height="30" xoffset="3" yoffset="29" xadvance="28" page="0" chnl="15"/>' +
'<char id="100" x="120" y="380" width="26" height="41" xoffset="3" yoffset="19" xadvance="28" page="0" chnl="15"/>' +
'<char id="110" x="187" y="34" width="26" height="30" xoffset="3" yoffset="29" xadvance="28" page="0" chnl="15"/>' +
'<char id="97" x="209" y="2" width="26" height="30" xoffset="2" yoffset="29" xadvance="28" page="0" chnl="15"/>' +
'<char id="108" x="160" y="155" width="8" height="41" xoffset="3" yoffset="19" xadvance="10" page="0" chnl="15"/>' +
'<char id="115" x="127" y="309" width="26" height="30" xoffset="2" yoffset="29" xadvance="26" page="0" chnl="15"/>' +
'<char id="1600" x="101" y="309" width="24" height="11" xoffset="-3" yoffset="48" xadvance="10" page="0" chnl="15"/>' +
'<char id="77" x="149" y="263" width="44" height="41" xoffset="3" yoffset="19" xadvance="47" page="0" chnl="15"/>' +
'<char id="103" x="162" y="198" width="26" height="41" xoffset="3" yoffset="29" xadvance="28" page="0" chnl="15"/>' +
'<char id="105" x="170" y="155" width="8" height="41" xoffset="3" yoffset="19" xadvance="10" page="0" chnl="15"/>' +
'<char id="109" x="127" y="341" width="42" height="30" xoffset="3" yoffset="29" xadvance="45" page="0" chnl="15"/>' +
'<char id="98" x="177" y="103" width="26" height="41" xoffset="3" yoffset="19" xadvance="28" page="0" chnl="15"/>' +
'<char id="66" x="180" y="146" width="32" height="41" xoffset="3" yoffset="19" xadvance="34" page="0" chnl="15"/>' +
'<char id="70" x="190" y="189" width="27" height="41" xoffset="3" yoffset="19" xadvance="27" page="0" chnl="15"/>' +
'<char id="99" x="155" y="306" width="26" height="30" xoffset="3" yoffset="29" xadvance="26" page="0" chnl="15"/>' +
'<char id="1570" x="205" y="66" width="19" height="52" xoffset="-1" yoffset="8" xadvance="10" page="0" chnl="15"/>' +
'<char id="58" x="84" y="439" width="11" height="25" xoffset="4" yoffset="34" xadvance="15" page="0" chnl="15"/>' +
'<char id="49" x="214" y="120" width="20" height="41" xoffset="6" yoffset="19" xadvance="33" page="0" chnl="15"/>' +
'<char id="55" x="226" y="34" width="31" height="41" xoffset="3" yoffset="19" xadvance="33" page="0" chnl="15"/>' +
'<char id="1613" x="30" y="399" width="15" height="11" xoffset="-7" yoffset="60" xadvance="8" page="0" chnl="15"/>' +
'<char id="8470" x="30" y="379" width="0" height="0" xoffset="0" yoffset="55" xadvance="12" page="0" chnl="15"/>' +
'<char id="59" x="214" y="163" width="11" height="24" xoffset="2" yoffset="35" xadvance="15" page="0" chnl="15"/>' +
'<char id="37" x="226" y="77" width="30" height="41" xoffset="3" yoffset="18" xadvance="31" page="0" chnl="15"/>' +
'<char id="63" x="139" y="423" width="27" height="40" xoffset="3" yoffset="18" xadvance="28" page="0" chnl="15"/>' +
'<char id="42" x="162" y="241" width="19" height="19" xoffset="7" yoffset="20" xadvance="29" page="0" chnl="15"/>' +
'<char id="95" x="50" y="444" width="32" height="8" xoffset="0" yoffset="59" xadvance="27" page="0" chnl="15"/>' +
'<char id="43" x="190" y="232" width="27" height="27" xoffset="3" yoffset="33" xadvance="29" page="0" chnl="15"/>' +
'<char id="45" x="50" y="454" width="21" height="9" xoffset="4" yoffset="37" xadvance="24" page="0" chnl="15"/>' +
'<char id="61" x="237" y="2" width="29" height="17" xoffset="4" yoffset="31" xadvance="33" page="0" chnl="15"/>' +
'<char id="44" x="42" y="170" width="11" height="15" xoffset="2" yoffset="46" xadvance="12" page="0" chnl="15"/>' +
'<char id="47" x="139" y="465" width="27" height="31" xoffset="1" yoffset="30" xadvance="24" page="0" chnl="15"/>' +
'<char id="124" x="168" y="373" width="8" height="50" xoffset="0" yoffset="19" xadvance="4" page="0" chnl="15"/>' +
'<char id="92" x="168" y="425" width="39" height="52" xoffset="-4" yoffset="19" xadvance="35" page="0" chnl="15"/>' +
'<char id="39" x="215" y="34" width="8" height="16" xoffset="2" yoffset="20" xadvance="8" page="0" chnl="15"/>' +
'<char id="64" x="178" y="338" width="34" height="36" xoffset="2" yoffset="23" xadvance="34" page="0" chnl="15"/>' +
'<char id="35" x="178" y="376" width="40" height="39" xoffset="2" yoffset="18" xadvance="40" page="0" chnl="15"/>' +
'<char id="36" x="195" y="261" width="28" height="51" xoffset="1" yoffset="13" xadvance="27" page="0" chnl="15"/>' +
'<char id="94" x="183" y="314" width="28" height="21" xoffset="0" yoffset="19" xadvance="24" page="0" chnl="15"/>' +
'<char id="38" x="214" y="314" width="35" height="45" xoffset="3" yoffset="15" xadvance="36" page="0" chnl="15"/>' +
'<char id="123" x="219" y="189" width="16" height="52" xoffset="5" yoffset="19" xadvance="21" page="0" chnl="15"/>' +
'<char id="125" x="236" y="120" width="16" height="52" xoffset="5" yoffset="19" xadvance="21" page="0" chnl="15"/>' +
'<char id="91" x="225" y="243" width="14" height="52" xoffset="3" yoffset="19" xadvance="15" page="0" chnl="15"/>' +
'<char id="93" x="237" y="174" width="14" height="52" xoffset="3" yoffset="19" xadvance="15" page="0" chnl="15"/>' +
'<char id="48" x="241" y="228" width="33" height="41" xoffset="3" yoffset="18" xadvance="33" page="0" chnl="15"/>' +
'<char id="50" x="241" y="271" width="31" height="41" xoffset="3" yoffset="18" xadvance="33" page="0" chnl="15"/>' +
'<char id="51" x="253" y="174" width="31" height="41" xoffset="3" yoffset="18" xadvance="33" page="0" chnl="15"/>' +
'<char id="52" x="254" y="120" width="34" height="41" xoffset="1" yoffset="19" xadvance="33" page="0" chnl="15"/>' +
'<char id="53" x="258" y="77" width="31" height="41" xoffset="4" yoffset="19" xadvance="33" page="0" chnl="15"/>' +
'<char id="54" x="259" y="21" width="31" height="41" xoffset="3" yoffset="18" xadvance="33" page="0" chnl="15"/>' +
'<char id="56" x="209" y="417" width="31" height="41" xoffset="3" yoffset="18" xadvance="33" page="0" chnl="15"/>' +
'<char id="57" x="209" y="460" width="31" height="41" xoffset="3" yoffset="18" xadvance="33" page="0" chnl="15"/>' +
'<char id="32" x="0" y="0" width="0" height="0" xoffset="3" yoffset="18" xadvance="12" page="0" chnl="15"/>' +
'</chars>' +
'</font>';
    HH.FontString2 = '<font>' +
        '<info face="font2" size="73" bold="0" italic="0" charset="" unicode="" stretchH="100" smooth="1" aa="1" padding="2,2,2,2" spacing="0,0" outline="0"/>' +
        '<common lineHeight="73" base="70" scaleW="868" scaleH="512" pages="1" packed="0"/>' +
        '<pages>' +
        '<page id="0" file="font2.png"/>' +
        '</pages>' +
        '<chars count="211">' +
        '<char id="32" x="2" y="2" width="0" height="0" xoffset="0" yoffset="70" xadvance="14" page="0" chnl="15"/>' +
        '<char id="33" x="2" y="4" width="9" height="54" xoffset="5" yoffset="17" xadvance="20" page="0" chnl="15"/>' +
        '<char id="34" x="2" y="60" width="17" height="18" xoffset="4" yoffset="16" xadvance="25" page="0" chnl="15"/>' +
        '<char id="35" x="13" y="2" width="36" height="50" xoffset="3" yoffset="20" xadvance="42" page="0" chnl="15"/>' +
        '<char id="36" x="2" y="80" width="31" height="62" xoffset="3" yoffset="15" xadvance="38" page="0" chnl="15"/>' +
        '<char id="37" x="2" y="144" width="49" height="52" xoffset="3" yoffset="19" xadvance="55" page="0" chnl="15"/>' +
        '<char id="38" x="35" y="54" width="37" height="55" xoffset="3" yoffset="17" xadvance="43" page="0" chnl="15"/>' +
        '<char id="39" x="21" y="54" width="7" height="18" xoffset="4" yoffset="16" xadvance="15" page="0" chnl="15"/>' +
        '<char id="40" x="2" y="198" width="16" height="70" xoffset="4" yoffset="15" xadvance="21" page="0" chnl="15"/>' +
        '<char id="41" x="2" y="270" width="16" height="70" xoffset="1" yoffset="15" xadvance="21" page="0" chnl="15"/>' +
        '<char id="42" x="35" y="111" width="25" height="26" xoffset="3" yoffset="18" xadvance="32" page="0" chnl="15"/>' +
        '<char id="43" x="51" y="2" width="37" height="39" xoffset="5" yoffset="30" xadvance="47" page="0" chnl="15"/>' +
        '<char id="44" x="2" y="342" width="10" height="20" xoffset="5" yoffset="62" xadvance="20" page="0" chnl="15"/>' +
        '<char id="45" x="51" y="43" width="20" height="7" xoffset="4" yoffset="46" xadvance="27" page="0" chnl="15"/>' +
        '<char id="46" x="73" y="43" width="9" height="9" xoffset="6" yoffset="62" xadvance="20" page="0" chnl="15"/>' +
        '<char id="47" x="2" y="364" width="23" height="59" xoffset="4" yoffset="16" xadvance="31" page="0" chnl="15"/>' +
        '<char id="48" x="2" y="425" width="34" height="53" xoffset="3" yoffset="18" xadvance="40" page="0" chnl="15"/>' +
        '<char id="49" x="20" y="198" width="18" height="52" xoffset="5" yoffset="19" xadvance="28" page="0" chnl="15"/>' +
        '<char id="50" x="20" y="252" width="28" height="52" xoffset="3" yoffset="18" xadvance="35" page="0" chnl="15"/>' +
        '<char id="51" x="20" y="306" width="31" height="53" xoffset="3" yoffset="18" xadvance="37" page="0" chnl="15"/>' +
        '<char id="52" x="40" y="198" width="34" height="51" xoffset="3" yoffset="19" xadvance="40" page="0" chnl="15"/>' +
        '<char id="53" x="50" y="251" width="30" height="52" xoffset="3" yoffset="19" xadvance="36" page="0" chnl="15"/>' +
        '<char id="54" x="53" y="139" width="31" height="53" xoffset="3" yoffset="18" xadvance="37" page="0" chnl="15"/>' +
        '<char id="55" x="76" y="194" width="30" height="52" xoffset="2" yoffset="19" xadvance="35" page="0" chnl="15"/>' +
        '<char id="56" x="27" y="361" width="32" height="53" xoffset="3" yoffset="18" xadvance="38" page="0" chnl="15"/>' +
        '<char id="57" x="53" y="305" width="31" height="53" xoffset="3" yoffset="18" xadvance="37" page="0" chnl="15"/>' +
        '<char id="58" x="82" y="248" width="9" height="36" xoffset="6" yoffset="35" xadvance="20" page="0" chnl="15"/>' +
        '<char id="59" x="74" y="54" width="10" height="47" xoffset="5" yoffset="35" xadvance="20" page="0" chnl="15"/>' +
        '<char id="60" x="38" y="416" width="30" height="40" xoffset="4" yoffset="31" xadvance="38" page="0" chnl="15"/>' +
        '<char id="61" x="62" y="111" width="34" height="26" xoffset="4" yoffset="39" xadvance="42" page="0" chnl="15"/>' +
        '<char id="62" x="38" y="458" width="30" height="40" xoffset="3" yoffset="31" xadvance="38" page="0" chnl="15"/>' +
        '<char id="63" x="61" y="360" width="28" height="54" xoffset="3" yoffset="17" xadvance="33" page="0" chnl="15"/>' +
        '<char id="64" x="86" y="286" width="58" height="70" xoffset="3" yoffset="16" xadvance="65" page="0" chnl="15"/>' +
        '<char id="65" x="86" y="43" width="40" height="54" xoffset="2" yoffset="17" xadvance="43" page="0" chnl="15"/>' +
        '<char id="66" x="98" y="99" width="36" height="55" xoffset="2" yoffset="17" xadvance="41" page="0" chnl="15"/>' +
        '<char id="67" x="70" y="416" width="36" height="55" xoffset="3" yoffset="16" xadvance="41" page="0" chnl="15"/>' +
        '<char id="68" x="91" y="358" width="39" height="55" xoffset="2" yoffset="17" xadvance="44" page="0" chnl="15"/>' +
        '<char id="69" x="128" y="2" width="31" height="54" xoffset="2" yoffset="17" xadvance="37" page="0" chnl="15"/>' +
        '<char id="70" x="108" y="415" width="31" height="54" xoffset="2" yoffset="17" xadvance="35" page="0" chnl="15"/>' +
        '<char id="71" x="132" y="358" width="37" height="55" xoffset="3" yoffset="16" xadvance="45" page="0" chnl="15"/>' +
        '<char id="72" x="141" y="415" width="35" height="53" xoffset="5" yoffset="17" xadvance="44" page="0" chnl="15"/>' +
        '<char id="73" x="86" y="139" width="7" height="53" xoffset="6" yoffset="17" xadvance="18" page="0" chnl="15"/>' +
        '<char id="74" x="108" y="156" width="24" height="54" xoffset="1" yoffset="17" xadvance="29" page="0" chnl="15"/>' +
        '<char id="75" x="108" y="212" width="35" height="55" xoffset="5" yoffset="16" xadvance="42" page="0" chnl="15"/>' +
        '<char id="76" x="134" y="156" width="28" height="53" xoffset="5" yoffset="17" xadvance="35" page="0" chnl="15"/>' +
        '<char id="77" x="145" y="211" width="45" height="53" xoffset="5" yoffset="17" xadvance="54" page="0" chnl="15"/>' +
        '<char id="78" x="146" y="266" width="37" height="54" xoffset="5" yoffset="17" xadvance="46" page="0" chnl="15"/>' +
        '<char id="79" x="171" y="322" width="41" height="55" xoffset="3" yoffset="16" xadvance="46" page="0" chnl="15"/>' +
        '<char id="80" x="185" y="266" width="34" height="54" xoffset="2" yoffset="17" xadvance="38" page="0" chnl="15"/>' +
        '<char id="81" x="136" y="58" width="41" height="59" xoffset="3" yoffset="16" xadvance="47" page="0" chnl="15"/>' +
        '<char id="82" x="164" y="119" width="34" height="55" xoffset="2" yoffset="17" xadvance="38" page="0" chnl="15"/>' +
        '<char id="83" x="192" y="176" width="32" height="55" xoffset="2" yoffset="16" xadvance="37" page="0" chnl="15"/>' +
        '<char id="84" x="161" y="2" width="38" height="53" xoffset="1" yoffset="17" xadvance="40" page="0" chnl="15"/>' +
        '<char id="85" x="179" y="57" width="35" height="54" xoffset="4" yoffset="17" xadvance="43" page="0" chnl="15"/>' +
        '<char id="86" x="200" y="113" width="40" height="55" xoffset="2" yoffset="16" xadvance="43" page="0" chnl="15"/>' +
        '<char id="87" x="216" y="2" width="54" height="55" xoffset="3" yoffset="16" xadvance="59" page="0" chnl="15"/>' +
        '<char id="88" x="178" y="379" width="38" height="55" xoffset="2" yoffset="16" xadvance="42" page="0" chnl="15"/>' +
        '<char id="89" x="214" y="322" width="37" height="54" xoffset="1" yoffset="16" xadvance="39" page="0" chnl="15"/>' +
        '<char id="90" x="178" y="436" width="35" height="53" xoffset="3" yoffset="17" xadvance="42" page="0" chnl="15"/>' +
        '<char id="91" x="215" y="436" width="13" height="70" xoffset="5" yoffset="16" xadvance="20" page="0" chnl="15"/>' +
        '<char id="92" x="221" y="233" width="24" height="59" xoffset="4" yoffset="16" xadvance="31" page="0" chnl="15"/>' +
        '<char id="93" x="230" y="378" width="13" height="70" xoffset="1" yoffset="16" xadvance="20" page="0" chnl="15"/>' +
        '<char id="94" x="2" y="480" width="33" height="29" xoffset="3" yoffset="19" xadvance="39" page="0" chnl="15"/>' +
        '<char id="95" x="141" y="470" width="33" height="5" xoffset="0" yoffset="76" xadvance="32" page="0" chnl="15"/>' +
        '<char id="96" x="93" y="269" width="14" height="14" xoffset="8" yoffset="13" xadvance="28" page="0" chnl="15"/>' +
        '<char id="97" x="216" y="59" width="30" height="40" xoffset="3" yoffset="31" xadvance="37" page="0" chnl="15"/>' +
        '<char id="98" x="230" y="450" width="30" height="55" xoffset="4" yoffset="17" xadvance="37" page="0" chnl="15"/>' +
        '<char id="99" x="226" y="170" width="27" height="40" xoffset="3" yoffset="31" xadvance="32" page="0" chnl="15"/>' +
        '<char id="100" x="242" y="101" width="30" height="54" xoffset="3" yoffset="17" xadvance="37" page="0" chnl="15"/>' +
        '<char id="101" x="248" y="59" width="28" height="40" xoffset="3" yoffset="31" xadvance="35" page="0" chnl="15"/>' +
        '<char id="102" x="272" y="2" width="23" height="54" xoffset="2" yoffset="16" xadvance="22" page="0" chnl="15"/>' +
        '<char id="103" x="245" y="378" width="30" height="55" xoffset="3" yoffset="31" xadvance="37" page="0" chnl="15"/>' +
        '<char id="104" x="262" y="435" width="29" height="54" xoffset="4" yoffset="17" xadvance="38" page="0" chnl="15"/>' +
        '<char id="105" x="218" y="378" width="9" height="54" xoffset="4" yoffset="16" xadvance="18" page="0" chnl="15"/>' +
        '<char id="106" x="247" y="212" width="16" height="70" xoffset="-4" yoffset="16" xadvance="17" page="0" chnl="15"/>' +
        '<char id="107" x="253" y="284" width="28" height="54" xoffset="4" yoffset="17" xadvance="34" page="0" chnl="15"/>' +
        '<char id="108" x="277" y="340" width="14" height="54" xoffset="5" yoffset="17" xadvance="20" page="0" chnl="15"/>' +
        '<char id="109" x="255" y="157" width="46" height="39" xoffset="5" yoffset="31" xadvance="55" page="0" chnl="15"/>' +
        '<char id="110" x="108" y="471" width="29" height="39" xoffset="5" yoffset="31" xadvance="38" page="0" chnl="15"/>' +
        '<char id="111" x="274" y="101" width="31" height="40" xoffset="3" yoffset="31" xadvance="37" page="0" chnl="15"/>' +
        '<char id="112" x="265" y="198" width="30" height="55" xoffset="5" yoffset="31" xadvance="37" page="0" chnl="15"/>' +
        '<char id="113" x="283" y="255" width="30" height="55" xoffset="3" yoffset="31" xadvance="37" page="0" chnl="15"/>' +
        '<char id="114" x="90" y="2" width="20" height="39" xoffset="5" yoffset="31" xadvance="25" page="0" chnl="15"/>' +
        '<char id="115" x="278" y="58" width="26" height="40" xoffset="2" yoffset="31" xadvance="31" page="0" chnl="15"/>' +
        '<char id="116" x="297" y="2" width="19" height="49" xoffset="2" yoffset="22" xadvance="21" page="0" chnl="15"/>' +
        '<char id="117" x="306" y="53" width="29" height="39" xoffset="5" yoffset="32" xadvance="38" page="0" chnl="15"/>' +
        '<char id="118" x="318" y="2" width="31" height="39" xoffset="2" yoffset="32" xadvance="34" page="0" chnl="15"/>' +
        '<char id="119" x="297" y="198" width="45" height="39" xoffset="2" yoffset="31" xadvance="47" page="0" chnl="15"/>' +
        '<char id="120" x="303" y="143" width="31" height="40" xoffset="1" yoffset="32" xadvance="34" page="0" chnl="15"/>' +
        '<char id="121" x="336" y="94" width="32" height="55" xoffset="1" yoffset="32" xadvance="34" page="0" chnl="15"/>' +
        '<char id="122" x="307" y="94" width="26" height="38" xoffset="4" yoffset="32" xadvance="33" page="0" chnl="15"/>' +
        '<char id="252" x="351" y="2" width="29" height="55" xoffset="5" yoffset="16" xadvance="38" page="0" chnl="15"/>' +
        '<char id="123" x="293" y="312" width="22" height="70" xoffset="3" yoffset="16" xadvance="28" page="0" chnl="15"/>' +
        '<char id="124" x="315" y="239" width="7" height="70" xoffset="6" yoffset="16" xadvance="20" page="0" chnl="15"/>' +
        '<char id="125" x="293" y="384" width="22" height="70" xoffset="2" yoffset="16" xadvance="28" page="0" chnl="15"/>' +
        '<char id="126" x="303" y="185" width="33" height="11" xoffset="3" yoffset="43" xadvance="40" page="0" chnl="15"/>' +
        '<char id="199" x="317" y="311" width="36" height="69" xoffset="3" yoffset="16" xadvance="41" page="0" chnl="15"/>' +
        '<char id="213" x="324" y="239" width="41" height="69" xoffset="3" yoffset="3" xadvance="46" page="0" chnl="15"/>' +
        '<char id="211" x="344" y="151" width="41" height="71" xoffset="3" yoffset="0" xadvance="46" page="0" chnl="15"/>' +
        '<char id="231" x="293" y="456" width="27" height="54" xoffset="3" yoffset="31" xadvance="32" page="0" chnl="15"/>' +
        '<char id="237" x="317" y="382" width="14" height="58" xoffset="5" yoffset="13" xadvance="18" page="0" chnl="15"/>' +
        '<char id="227" x="322" y="442" width="30" height="55" xoffset="3" yoffset="17" xadvance="37" page="0" chnl="15"/>' +
        '<char id="243" x="370" y="59" width="31" height="59" xoffset="3" yoffset="13" xadvance="37" page="0" chnl="15"/>' +
        '<char id="234" x="333" y="382" width="28" height="58" xoffset="3" yoffset="13" xadvance="35" page="0" chnl="15"/>' +
        '<char id="233" x="354" y="442" width="28" height="59" xoffset="3" yoffset="13" xadvance="35" page="0" chnl="15"/>' +
        '<char id="228" x="382" y="2" width="30" height="55" xoffset="3" yoffset="16" xadvance="37" page="0" chnl="15"/>' +
        '<char id="223" x="355" y="310" width="30" height="55" xoffset="5" yoffset="16" xadvance="38" page="0" chnl="15"/>' +
        '<char id="246" x="363" y="367" width="31" height="55" xoffset="3" yoffset="16" xadvance="37" page="0" chnl="15"/>' +
        '<char id="241" x="367" y="224" width="29" height="54" xoffset="5" yoffset="17" xadvance="38" page="0" chnl="15"/>' +
        '<char id="161" x="387" y="280" width="9" height="54" xoffset="4" yoffset="31" xadvance="20" page="0" chnl="15"/>' +
        '<char id="191" x="384" y="424" width="28" height="54" xoffset="1" yoffset="31" xadvance="33" page="0" chnl="15"/>' +
        '<char id="200" x="396" y="336" width="31" height="70" xoffset="2" yoffset="0" xadvance="37" page="0" chnl="15"/>' +
        '<char id="195" x="414" y="408" width="40" height="69" xoffset="2" yoffset="3" xadvance="43" page="0" chnl="15"/>' +
        '<char id="350" x="387" y="120" width="32" height="69" xoffset="2" yoffset="16" xadvance="37" page="0" chnl="15"/>' +
        '<char id="220" x="414" y="2" width="35" height="68" xoffset="4" yoffset="4" xadvance="43" page="0" chnl="15"/>' +
        '<char id="351" x="398" y="191" width="26" height="54" xoffset="2" yoffset="31" xadvance="31" page="0" chnl="15"/>' +
        '<char id="287" x="398" y="247" width="30" height="71" xoffset="3" yoffset="16" xadvance="37" page="0" chnl="15"/>' +
        '<char id="280" x="429" y="320" width="31" height="69" xoffset="2" yoffset="17" xadvance="37" page="0" chnl="15"/>' +
        '<char id="281" x="421" y="72" width="28" height="54" xoffset="3" yoffset="31" xadvance="35" page="0" chnl="15"/>' +
        '<char id="261" x="421" y="128" width="33" height="54" xoffset="3" yoffset="31" xadvance="37" page="0" chnl="15"/>' +
        '<char id="321" x="426" y="184" width="34" height="53" xoffset="-1" yoffset="17" xadvance="35" page="0" chnl="15"/>' +
        '<char id="322" x="430" y="239" width="20" height="54" xoffset="-1" yoffset="17" xadvance="20" page="0" chnl="15"/>' +
        '<char id="324" x="452" y="239" width="29" height="58" xoffset="5" yoffset="13" xadvance="38" page="0" chnl="15"/>' +
        '<char id="323" x="456" y="391" width="37" height="71" xoffset="5" yoffset="0" xadvance="46" page="0" chnl="15"/>' +
        '<char id="347" x="462" y="299" width="26" height="59" xoffset="2" yoffset="13" xadvance="31" page="0" chnl="15"/>' +
        '<char id="304" x="451" y="2" width="9" height="67" xoffset="5" yoffset="3" xadvance="18" page="0" chnl="15"/>' +
        '<char id="1068" x="451" y="71" width="31" height="53" xoffset="5" yoffset="17" xadvance="38" page="0" chnl="15"/>' +
        '<char id="1046" x="456" y="126" width="61" height="55" xoffset="2" yoffset="16" xadvance="64" page="0" chnl="15"/>' +
        '<char id="1045" x="462" y="183" width="31" height="54" xoffset="2" yoffset="17" xadvance="37" page="0" chnl="15"/>' +
        '<char id="224" x="462" y="2" width="30" height="59" xoffset="3" yoffset="13" xadvance="37" page="0" chnl="15"/>' +
        '<char id="236" x="483" y="239" width="14" height="58" xoffset="-1" yoffset="13" xadvance="18" page="0" chnl="15"/>' +
        '<char id="1060" x="484" y="63" width="46" height="58" xoffset="3" yoffset="15" xadvance="52" page="0" chnl="15"/>' +
        '<char id="1064" x="495" y="183" width="52" height="53" xoffset="5" yoffset="17" xadvance="62" page="0" chnl="15"/>' +
        '<char id="1065" x="490" y="299" width="58" height="64" xoffset="5" yoffset="17" xadvance="64" page="0" chnl="15"/>' +
        '<char id="1066" x="519" y="123" width="41" height="53" xoffset="1" yoffset="17" xadvance="44" page="0" chnl="15"/>' +
        '<char id="1067" x="499" y="238" width="44" height="53" xoffset="5" yoffset="17" xadvance="53" page="0" chnl="15"/>' +
        '<char id="1069" x="545" y="238" width="36" height="55" xoffset="3" yoffset="16" xadvance="41" page="0" chnl="15"/>' +
        '<char id="1070" x="549" y="178" width="54" height="55" xoffset="5" yoffset="16" xadvance="62" page="0" chnl="15"/>' +
        '<char id="1071" x="494" y="2" width="32" height="54" xoffset="2" yoffset="17" xadvance="38" page="0" chnl="15"/>' +
        '<char id="305" x="112" y="2" width="7" height="39" xoffset="5" yoffset="31" xadvance="18" page="0" chnl="15"/>' +
        '<char id="263" x="528" y="2" width="27" height="59" xoffset="3" yoffset="13" xadvance="32" page="0" chnl="15"/>' +
        '<char id="339" x="456" y="464" width="52" height="40" xoffset="3" yoffset="31" xadvance="57" page="0" chnl="15"/>' +
        '<char id="201" x="495" y="365" width="31" height="70" xoffset="2" yoffset="0" xadvance="37" page="0" chnl="15"/>' +
        '<char id="380" x="532" y="63" width="26" height="55" xoffset="4" yoffset="15" xadvance="33" page="0" chnl="15"/>' +
        '<char id="1081" x="557" y="2" width="28" height="55" xoffset="5" yoffset="16" xadvance="38" page="0" chnl="15"/>' +
        '<char id="232" x="560" y="59" width="28" height="59" xoffset="3" yoffset="13" xadvance="35" page="0" chnl="15"/>' +
        '<char id="238" x="510" y="437" width="23" height="57" xoffset="-3" yoffset="13" xadvance="18" page="0" chnl="15"/>' +
        '<char id="245" x="587" y="2" width="31" height="55" xoffset="3" yoffset="17" xadvance="37" page="0" chnl="15"/>' +
        '<char id="225" x="528" y="365" width="30" height="59" xoffset="3" yoffset="13" xadvance="37" page="0" chnl="15"/>' +
        '<char id="1072" x="562" y="120" width="30" height="40" xoffset="3" yoffset="31" xadvance="37" page="0" chnl="15"/>' +
        '<char id="1073" x="590" y="59" width="31" height="55" xoffset="3" yoffset="17" xadvance="37" page="0" chnl="15"/>' +
        '<char id="1074" x="620" y="2" width="29" height="39" xoffset="3" yoffset="32" xadvance="34" page="0" chnl="15"/>' +
        '<char id="1075" x="594" y="116" width="24" height="39" xoffset="3" yoffset="32" xadvance="28" page="0" chnl="15"/>' +
        '<char id="1076" x="550" y="295" width="35" height="48" xoffset="2" yoffset="32" xadvance="38" page="0" chnl="15"/>' +
        '<char id="1077" x="583" y="235" width="28" height="40" xoffset="3" yoffset="31" xadvance="35" page="0" chnl="15"/>' +
        '<char id="1105" x="605" y="157" width="28" height="55" xoffset="3" yoffset="16" xadvance="35" page="0" chnl="15"/>' +
        '<char id="1078" x="620" y="116" width="48" height="39" xoffset="2" yoffset="32" xadvance="51" page="0" chnl="15"/>' +
        '<char id="1079" x="623" y="43" width="26" height="40" xoffset="2" yoffset="31" xadvance="31" page="0" chnl="15"/>' +
        '<char id="1080" x="535" y="426" width="28" height="38" xoffset="5" yoffset="32" xadvance="38" page="0" chnl="15"/>' +
        '<char id="1082" x="535" y="466" width="28" height="39" xoffset="5" yoffset="32" xadvance="34" page="0" chnl="15"/>' +
        '<char id="1083" x="560" y="345" width="31" height="39" xoffset="1" yoffset="32" xadvance="37" page="0" chnl="15"/>' +
        '<char id="1084" x="560" y="386" width="35" height="38" xoffset="5" yoffset="32" xadvance="44" page="0" chnl="15"/>' +
        '<char id="1085" x="587" y="277" width="28" height="38" xoffset="5" yoffset="32" xadvance="38" page="0" chnl="15"/>' +
        '<char id="1086" x="613" y="214" width="31" height="40" xoffset="3" yoffset="31" xadvance="37" page="0" chnl="15"/>' +
        '<char id="1087" x="635" y="157" width="27" height="38" xoffset="5" yoffset="32" xadvance="37" page="0" chnl="15"/>' +
        '<char id="1088" x="593" y="317" width="30" height="55" xoffset="5" yoffset="31" xadvance="37" page="0" chnl="15"/>' +
        '<char id="1089" x="617" y="256" width="27" height="40" xoffset="3" yoffset="31" xadvance="32" page="0" chnl="15"/>' +
        '<char id="1090" x="565" y="426" width="29" height="38" xoffset="1" yoffset="32" xadvance="31" page="0" chnl="15"/>' +
        '<char id="1091" x="596" y="426" width="32" height="55" xoffset="1" yoffset="32" xadvance="34" page="0" chnl="15"/>' +
        '<char id="1092" x="651" y="2" width="39" height="69" xoffset="3" yoffset="17" xadvance="45" page="0" chnl="15"/>' +
        '<char id="1093" x="651" y="73" width="31" height="40" xoffset="1" yoffset="32" xadvance="34" page="0" chnl="15"/>' +
        '<char id="1094" x="597" y="374" width="31" height="47" xoffset="5" yoffset="32" xadvance="37" page="0" chnl="15"/>' +
        '<char id="1095" x="565" y="466" width="26" height="38" xoffset="4" yoffset="32" xadvance="35" page="0" chnl="15"/>' +
        '<char id="1096" x="625" y="298" width="40" height="38" xoffset="5" yoffset="32" xadvance="50" page="0" chnl="15"/>' +
        '<char id="1097" x="646" y="197" width="44" height="48" xoffset="5" yoffset="32" xadvance="50" page="0" chnl="15"/>' +
        '<char id="1100" x="646" y="247" width="26" height="39" xoffset="5" yoffset="32" xadvance="33" page="0" chnl="15"/>' +
        '<char id="1099" x="670" y="115" width="37" height="39" xoffset="5" yoffset="32" xadvance="47" page="0" chnl="15"/>' +
        '<char id="1098" x="670" y="156" width="33" height="39" xoffset="1" yoffset="32" xadvance="36" page="0" chnl="15"/>' +
        '<char id="8217" x="95" y="156" width="10" height="20" xoffset="4" yoffset="17" xadvance="17" page="0" chnl="15"/>' +
        '<char id="1101" x="684" y="73" width="27" height="40" xoffset="2" yoffset="31" xadvance="31" page="0" chnl="15"/>' +
        '<char id="1102" x="692" y="2" width="42" height="40" xoffset="5" yoffset="31" xadvance="50" page="0" chnl="15"/>' +
        '<char id="1103" x="630" y="338" width="25" height="40" xoffset="3" yoffset="32" xadvance="33" page="0" chnl="15"/>' +
        '<char id="1040" x="630" y="380" width="40" height="54" xoffset="2" yoffset="17" xadvance="43" page="0" chnl="15"/>' +
        '<char id="1041" x="630" y="436" width="35" height="54" xoffset="2" yoffset="17" xadvance="39" page="0" chnl="15"/>' +
        '<char id="1042" x="667" y="436" width="36" height="55" xoffset="2" yoffset="17" xadvance="41" page="0" chnl="15"/>' +
        '<char id="1043" x="667" y="288" width="30" height="54" xoffset="2" yoffset="17" xadvance="34" page="0" chnl="15"/>' +
        '<char id="1044" x="692" y="197" width="44" height="64" xoffset="2" yoffset="17" xadvance="47" page="0" chnl="15"/>' +
        '<char id="1025" x="709" y="115" width="31" height="67" xoffset="2" yoffset="4" xadvance="37" page="0" chnl="15"/>' +
        '<char id="1047" x="713" y="44" width="33" height="55" xoffset="3" yoffset="16" xadvance="38" page="0" chnl="15"/>' +
        '<char id="1048" x="672" y="344" width="37" height="54" xoffset="5" yoffset="17" xadvance="46" page="0" chnl="15"/>' +
        '<char id="1049" x="699" y="263" width="37" height="68" xoffset="5" yoffset="3" xadvance="46" page="0" chnl="15"/>' +
        '<char id="1050" x="705" y="400" width="35" height="55" xoffset="5" yoffset="16" xadvance="42" page="0" chnl="15"/>' +
        '<char id="1051" x="711" y="333" width="39" height="54" xoffset="1" yoffset="17" xadvance="45" page="0" chnl="15"/>' +
        '<char id="1052" x="705" y="457" width="45" height="53" xoffset="5" yoffset="17" xadvance="54" page="0" chnl="15"/>' +
        '<char id="1053" x="742" y="389" width="35" height="53" xoffset="5" yoffset="17" xadvance="44" page="0" chnl="15"/>' +
        '<char id="1054" x="752" y="444" width="41" height="55" xoffset="3" yoffset="16" xadvance="46" page="0" chnl="15"/>' +
        '<char id="1055" x="738" y="184" width="35" height="53" xoffset="5" yoffset="17" xadvance="44" page="0" chnl="15"/>' +
        '<char id="1056" x="742" y="101" width="34" height="54" xoffset="2" yoffset="17" xadvance="38" page="0" chnl="15"/>' +
        '<char id="1057" x="738" y="239" width="36" height="55" xoffset="3" yoffset="16" xadvance="41" page="0" chnl="15"/>' +
        '<char id="1058" x="775" y="157" width="38" height="53" xoffset="1" yoffset="17" xadvance="40" page="0" chnl="15"/>' +
        '<char id="1059" x="752" y="296" width="36" height="55" xoffset="3" yoffset="16" xadvance="41" page="0" chnl="15"/>' +
        '<char id="1061" x="776" y="212" width="38" height="55" xoffset="2" yoffset="16" xadvance="42" page="0" chnl="15"/>' +
        '<char id="1062" x="779" y="353" width="40" height="64" xoffset="5" yoffset="17" xadvance="47" page="0" chnl="15"/>' +
        '<char id="1063" x="790" y="269" width="33" height="53" xoffset="5" yoffset="17" xadvance="42" page="0" chnl="15"/>' +
        '<char id="259" x="795" y="419" width="30" height="56" xoffset="3" yoffset="16" xadvance="37" page="0" chnl="15"/>' +
        '<char id="226" x="821" y="324" width="30" height="58" xoffset="3" yoffset="13" xadvance="37" page="0" chnl="15"/>' +
        '<char id="539" x="748" y="2" width="19" height="65" xoffset="2" yoffset="22" xadvance="21" page="0" chnl="15"/>' +
        '<char id="229" x="769" y="2" width="30" height="59" xoffset="3" yoffset="12" xadvance="37" page="0" chnl="15"/>' +
        '<char id="193" x="778" y="63" width="40" height="71" xoffset="2" yoffset="0" xadvance="43" page="0" chnl="15"/>' +
        '<char id="205" x="815" y="136" width="14" height="70" xoffset="5" yoffset="0" xadvance="18" page="0" chnl="15"/>' +
        '<char id="336" x="825" y="208" width="41" height="72" xoffset="3" yoffset="0" xadvance="46" page="0" chnl="15"/>' +
        '<char id="32" x="0" y="0" width="0" height="0" xoffset="3" yoffset="0" xadvance="14" page="0" chnl="15"/>' +
        '</chars>' +
        '</font>';

HH.BitmapFontLoader2 = function() {
    var xmlDoc;
    if (window.DOMParser) {
        var parser=new DOMParser();
        xmlDoc=parser.parseFromString(HH.IS_ARAB ? HH.FontString2a : HH.FontString2 ,"text/xml");
    }
    else  {
        xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async=false;
        xmlDoc.loadXML(HH.IS_ARAB ? HH.FontString2a : HH.FontString2 );
    }
            var responseXML = xmlDoc;

            var textureUrl = this.baseUrl + responseXML.getElementsByTagName('page')[0].getAttribute('file');
           // var image = new PIXI.ImageLoader(textureUrl, this.crossorigin);
            this.texture = GodStep.textures['font2' + (HH.IS_ARAB ? 'a' : '')].baseTexture;//image.texture.baseTexture;

            var data = {};
            var info = responseXML.getElementsByTagName('info')[0];
            var common = responseXML.getElementsByTagName('common')[0];
            data.font = info.getAttribute('face');
            data.size = parseInt(info.getAttribute('size'), 10);
            data.lineHeight = parseInt(common.getAttribute('lineHeight'), 10);
            data.chars = {};
            var xadvance = HH.IS_ARAB ? 0 : 2;
            //parse letters
            var letters = responseXML.getElementsByTagName('char');

            for (var i = 0; i < letters.length; i++)
            {
                var charCode = parseInt(letters[i].getAttribute('id'), 10);

                var textureRect = new PIXI.Rectangle(
                    parseInt(letters[i].getAttribute('x'), 10),
                    parseInt(letters[i].getAttribute('y'), 10),
                    parseInt(letters[i].getAttribute('width'), 10),
                    parseInt(letters[i].getAttribute('height'), 10)
                );

                data.chars[charCode] = {
                    xOffset: parseInt(letters[i].getAttribute('xoffset'), 10),
                    yOffset: parseInt(letters[i].getAttribute('yoffset'), 10) + 20,
                    xAdvance: parseInt(letters[i].getAttribute('xadvance'), 10) + xadvance,
                    kerning: {},
                    texture: PIXI.TextureCache[charCode] = new PIXI.Texture(this.texture, textureRect)

                };
            }

            //parse kernings
            var kernings = responseXML.getElementsByTagName('kerning');
            for (i = 0; i < kernings.length; i++)
            {
                var first = parseInt(kernings[i].getAttribute('first'), 10);
                var second = parseInt(kernings[i].getAttribute('second'), 10);
                var amount = parseInt(kernings[i].getAttribute('amount'), 10);

                data.chars[second].kerning[first] = amount;

            }

            PIXI.BitmapText.fonts[data.font] = data;
            //this.onComplete();

           // image.addEventListener('loaded', this.onLoaded.bind(this));
          //  image.load();

};
extend(HH.BitmapFontLoader2, PIXI.BitmapFontLoader);