var config = {
  startOnLoad:true,
  theme: 'dark',
  flowchart:{
          useMaxWidth:false,
          htmlLabels:true
      }
};
mermaid.initialize(config);
window.mermaid.init(undefined, document.querySelectorAll('.language-mermaid'));
