<template>
    <!--Tabs für meinen Beruflichen Werdegang Start-->
    <el-tabs :tab-position="tabPosition" style="height: 250px;">
     <!--Tabs für meinen Beruflichen Werdegang H2G Start -->
        <el-tab-pane label="H2G Internetagentur">
            <h1>Praktikum Webentwicklung
                <small>02.2023 - 04.2023</small> 
            </h1>
            <p>Sicherstellen der Kundenaufrträge, Einrichten, Produktion und Überwachung der Produktionsanlagen.</p>
        </el-tab-pane>
         <!--Tabs für meinen Beruflichen Werdegang H2G Ende -->
         <!--Tabs für meinen Beruflichen Werdegang Effingermedien Start -->
        <el-tab-pane label="Effingermedien">
            <h1>Maschinenführer
                <small>01.2020 - 06.2020</small> 
            </h1>
            <p>Sicherstellen der Kundenaufrträge, Einrichten, Produktion und Überwachung der Produktionsanlagen.</p>
        </el-tab-pane>
         <!--Tabs für meinen Beruflichen Werdegang Effingermedien Ende -->
         <!--Tabs für meinen Beruflichen Werdegang Jobtv Start -->
        <el-tab-pane label="jobtv">
            <h1>Mediendesigner
                <small>07.2019 - 11.2019</small>  
            </h1>
            <p>Digitalegrafische Konzepte, Screendesign, Logos und Flyer.</p>  
        </el-tab-pane>
        <!--Tabs für meinen Beruflichen Werdegang Jobtv Ende-->
        <!--Tabs für meinen Beruflichen Werdegang Schär Start-->
        <el-tab-pane label="Schär Druckweiterverarbeitung">
            <h1>Maschinenführer
                <small>07.2018 - 12.2018</small>
            </h1>
            <p>Sicherstellen der Kundenaufrträge, Einrichten, Produktion und Überwachung der Produktionsanlagen.</p>        
        </el-tab-pane>
        <!--Tabs für meinen Beruflichen Werdegang Schär Ende-->
        <!--Tabs für meinen Beruflichen Werdegang Reisen Start-->
        <el-tab-pane label="Auf Reisen">
            <h1>Norwegen und Thailand
                <small>12.2017 - 07.2018</small>
            </h1>
            <p>Englischkenntnisse verbessern, Landschaften fotografieren und Kultur kennen lernen.</p>    
        </el-tab-pane>
        <!--Tabs für meinen Beruflichen Werdegang Reisen Ende-->
        <!--Tabs für meinen Beruflichen Werdegang RS Start-->
        <el-tab-pane label="Rekrutenschule">
            <h1>Rekrutenschule
                <small>07.2017 – 11.2017</small>
            </h1>
            <p>Nachschubsoldat, Fribourg</p> 
        </el-tab-pane>
         <!--Tabs für meinen Beruflichen Werdegang RS Ende-->
          <!--Tabs für meinen Beruflichen Werdegang Sprüngli Start-->
        <el-tab-pane label="Sprüngli Druck"> 
            <h1>Lehre Maschinenführer 
                <small>08.2014 - 07.2017</small>
            </h1>     
            <p>Sicherstellen der Kundenaufrträge, Einrichten, Produktion und Überwachung der Produktionsanlagen.</p>       
        </el-tab-pane>
         <!--Tabs für meinen Beruflichen Werdegang Sprüngli Ende-->
    </el-tabs>
    <!--Tabs für meinen Beruflichen Werdegang Ende-->
</template>
<script>
export default {
  data() {
    return {
      tabPosition: 'left',
    }
  },
}
</script>

<style>
.tab {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 40vh;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.el-tabs__item:hover{
    color: #42b983 !important;
}
.el-tabs__item.is-active{
    color: #42b983 !important;
}
.el-tabs__item{
    color: #FBFBFA  !important;
    font-size: 17px !important;
}
.el-tabs--left .el-tabs__active-bar.is-left{
    background-color: #42b983;
}
.el-tabs__content{
    width: 45vw;
}
</style>