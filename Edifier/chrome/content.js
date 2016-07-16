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
                var replacedText = replacedText.replace(/\bHephaestus\b|\bhephaestus\b/gi, "Greek Ed of the Forge");
                var replacedText = replacedText.replace(/\bHades\b|\bhades\b/gi, "Greek Ed of Death");
                var replacedText = replacedText.replace(/\bAthena\b|\bathena\b/gi, "Greek Edess of Wisdom");
                var replacedText = replacedText.replace(/\bArtemis\b|\bartemis\b/gi, "Greek Maiden Edess of the Hunt");
                var replacedText = replacedText.replace(/\bAphrodite\b|\baphrodite\b/gi, "Greek All Sexy Like Edess");
                var replacedText = replacedText.replace(/\bApollo\b|\bapollo\b/gi, "Greek Ed of Medicine");
                var replacedText = replacedText.replace(/\bAres\b|\bares\b/gi, "Greek Ed of War");
                var replacedText = replacedText.replace(/\bDemeter\b|\bdemeter\b/gi, "Greek Ed of Grain");
                var replacedText = replacedText.replace(/\bDionysus\b|\bdionysus\b/gi, "Greek Ed of Partying");
                var replacedText = replacedText.replace(/\bHera\b|\bhera\b/gi, "Greek Edess of Women");
                var replacedText = replacedText.replace(/\bHermes\b|\bhermes\b/gi, "Greek Ed of Travel");
                var replacedText = replacedText.replace(/\bHestia\b|\bhestia\b/gi, "Greek Edess of the Hearth");
                var replacedText = replacedText.replace(/Giant|giant/gi, "big man");


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