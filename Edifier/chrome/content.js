var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    change(element);
}

function change(element){

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text.replace(/God/gi, 'Ed');
                var replacedText = replacedText.replace(/god/gi, 'ed');
                var replacedText = replacedText.replace(/\bThor\b|\bthor\b/gi, "Norse Thunder Ed");
                var replacedText = replacedText.replace(/\bOdin\b|\bodin\b/gi, "Norse One-Eyed Ed");
                var replacedText = replacedText.replace(/\bLoki\b|\bloki\b/gi, "Norse Lying Ed");
                var replacedText = replacedText.replace(/\bZeus\b|\bzeus\b/gi, "Greek Thunder Ed");
                var replacedText = replacedText.replace(/\bPoseidon\b|\bposiedon\b/gi, "Greek Ed of the Ocean Floor");
                var replacedText = replacedText.replace(/\bHephestos\b|\bhephestos\b/gi, "Greek Ed of the Forge");
                var replacedText = replacedText.replace(/\bHades\b|\bhades\b/gi, "Greek Ed of Death");
                var replacedText = replacedText.replace(/\bAthena\b|\bathena\b/gi, "Greek Edess of Wisdom");
                var replacedText = replacedText.replace(/\bArtemis\b|\bartemis\b/gi, "Greek Maiden Edess of the Hunt");
                var replacedText = replacedText.replace(/\bAphrodite\b|\baphrodite\b/gi, "Greek All Sexy Like Edess")

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
}

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log("MUTATION: "+mutation.type);
  });    
});