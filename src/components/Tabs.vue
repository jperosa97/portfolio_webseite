<template>
    <el-tabs :tab-position="tabPosition" style="height: 250px">
        <el-tab-pane label="Effingermedien">
            <h1>Maschinenführer
                <small>01.2020 - 06.2020</small> 
            </h1>
            <p>Sicherstellen der Kundenaufrträge, Einrichten, Produktion und Überwachung der Produktionsanlagen.</p>
        </el-tab-pane>
        <el-tab-pane label="jobtv">
            <h1>Mediendesigner
                <small>07.2019 - 11.2019</small>  
            </h1>
            <p>Digitalegrafische Konzepte, Screendesign, Logos und Flyer.</p>  </el-tab-pane>
        <el-tab-pane label="Schär Druckweiterverarbeitung">
            <h1>Maschinenführer
                <small>07.2018 - 12.2018</small>
            </h1>
            <p>Sicherstellen der Kundenaufrträge, Einrichten, Produktion und Überwachung der Produktionsanlagen.</p>        
        </el-tab-pane>
        <el-tab-pane label="Auf Reisen">
            <h1>Norwegen und Thailand
                <small>12.2017 - 07.2018</small>
            </h1>
            <p>Englischkenntnisse verbessern, Landschaften fotografieren und Kultur kennen lernen.</p>    
        </el-tab-pane>
        <el-tab-pane label="Rekrutenschule">
            <h1>Rekrutenschule
                <small>07.2017 – 11.2017</small>
            </h1>
            <p>Nachschubsoldat, Fribourg</p> 
        </el-tab-pane>
        <el-tab-pane label="Sprüngli Druck"> 
            <h1>Lehre Maschinenführer 
                <small>08.2014 - 07.2017</small>
            </h1>     
            <p>Sicherstellen der Kundenaufrträge, Einrichten, Produktion und Überwachung der Produktionsanlagen.</p>       
        </el-tab-pane>
    </el-tabs>
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
    position: relative;
    top: -15em;
}
.n-card.n-card--bordered{
  background-color: #1A191C;
 
}
.n-tabs.n-tabs--line-type .n-tabs-tab, .n-tabs.n-tabs--bar-type .n-tabs-tab {
    color: #FBFBFA;
}
</style>