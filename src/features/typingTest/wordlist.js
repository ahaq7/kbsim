export const WordList = [
  "the","he","be","but","which","out","into","no","made","long","of","for","this","what","their","them","has","make","over","little","and","was","from","all","said","then","more","than","did","very","a","on","I","were","if","she","her","first","down","after","to","are","have","when","do","many","two","been","only","words","in","as","or","we","will","so","like","its","way","called","is","with","by","there","each","some","him","who","find","just","you","his","one","can","about","these","see","now","use","where","that","they","had","an","how","would","time","people","may","most","it","at","not","your","up","other","could","my","water","know","get","man","another","place","again","every","line","along","few","world","through","too","came","well","off","found","set","while","those","going","back","any","come","such","went","still","own","might","always","want","much","day","work","here","old","between","under","next","show","school","go","same","three","take","number","mane","read","sound","large","important","good","right","must","why","great","should","last","below","often","until","new","look","because","help","tell","home","never","saw","together","form","write","think","does","put","men","big","us","something","asked","food","our","also","part","different","say","give","left","thought","house","keep","me","around","even"]

export function shuffle(a) {
   for (let i = a.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [a[i], a[j]] = [a[j], a[i]];
   }
   return a;
}
