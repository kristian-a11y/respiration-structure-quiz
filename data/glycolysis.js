const glycolysis = {
  name: "Glycolysis",

  flowchart: [
    { id: 1, text: "Hexokinase: Glucose → Glucose-6-phosphate" },
    { id: 2, text: "Phosphoglucose isomerase: Glucose-6-phosphate → Fructose-6-phosphate" },
    { id: 3, text: "PFK-1: Fructose-6-phosphate → Fructose-1,6-bisphosphate" },
    { id: 4, text: "Aldolase: Fructose-1,6-bisphosphate → DHAP + G3P" },
    { id: 5, text: "Triose phosphate isomerase: DHAP → G3P" },
    { id: 6, text: "G3P dehydrogenase: G3P → 1,3-Bisphosphoglycerate" },
    { id: 7, text: "Phosphoglycerate kinase: 1,3-BPG → 3-Phosphoglycerate" },
    { id: 8, text: "Phosphoglycerate mutase: 3-Phosphoglycerate → 2-Phosphoglycerate" },
    { id: 9, text: "Enolase: 2-Phosphoglycerate → Phosphoenolpyruvate" },
    { id: 10, text: "Pyruvate kinase: Phosphoenolpyruvate → Pyruvate" }
  ],

  structures: [
    {
      stepId: 1,
      image: "images/glucose.svg",
      alt: "Glucose molecular structure",
      question: "Which molecule is shown?",
      options: ["Glucose", "Fructose", "Galactose"],
      correct: "Glucose"
    },
    {
      stepId: 2,
      image: "images/glucose-6-phosphate.svg",
      alt: "Glucose-6-phosphate structure",
      question: "Which functional group was added?",
      options: ["Phosphate", "Carboxyl", "Amine"],
      correct: "Phosphate"
    },
    {
      stepId: 3,
      image: "images/fructose-6-phosphate.svg",
      alt: "Fructose-6-phosphate structure",
      question: "What type of sugar is this?",
      options: ["Aldose", "Ketose", "Pentose"],
      correct: "Ketose"
    },
    {
      stepId: 4,
      image: "images/fructose-1-6-bisphosphate.svg",
      alt: "Fructose-1,6-bisphosphate structure",
      question: "How many phosphate groups are present?",
      options: ["1", "2", "3"],
      correct: "2"
    },
    {
      stepId: 5,
      image: "images/glyceraldehyde-3-phosphate.svg",
      alt: "Glyceraldehyde-3-phosphate structure",
      question: "Which triose continues glycolysis?",
      options: ["DHAP", "G3P", "Both"],
      correct: "G3P"
    },
    {
      stepId: 6,
      image: "images/1-3-bisphosphoglycerate.svg",
      alt: "1,3-bisphosphoglycerate structure",
      question: "Which molecule is reduced in this step?",
      options: ["NAD+", "ATP", "ADP"],
      correct: "NAD+"
    },
    {
      stepId: 7,
      image: "images/3-phosphoglycerate.svg",
      alt: "3-phosphoglycerate structure",
      question: "What is produced along with this molecule?",
      options: ["ATP", "NADH", "CO₂"],
      correct: "ATP"
    },
    {
      stepId: 8,
      image: "images/2-phosphoglycerate.svg",
      alt: "2-phosphoglycerate structure",
      question: "What changes in this step?",
      options: [
        "Phosphate position",
        "Carbon number",
        "Oxidation state"
      ],
      correct: "Phosphate position"
    },
    {
      stepId: 9,
      image: "images/phosphoenolpyruvate.svg",
      alt: "Phosphoenolpyruvate structure",
      question: "Why is this molecule high-energy?",
      options: [
        "Enol phosphate bond",
        "More carbons",
        "Extra oxygen"
      ],
      correct: "Enol phosphate bond"
    },
    {
      stepId: 10,
      image: "images/pyruvate.svg",
      alt: "Pyruvate structure",
      question: "How many pyruvate molecules are produced per glucose?",
      options: ["1", "2", "4"],
      correct: "2"
    }
  ]
};

