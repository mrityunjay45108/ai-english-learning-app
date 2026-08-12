const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding vocabulary...');
  const words = [
    {
      word: 'Happy',
      pronunciation: '/ˈhæpi/',
      difficulty: 'BEGINNER',
      category: 'emotions',
      meanings: [{ partOfSpeech: 'ADJECTIVE', meaning: 'Feeling or showing pleasure or contentment', meaningHindi: 'खुश', exampleSentence: 'I am happy to see you.' }]
    },
    {
      word: 'Beautiful',
      pronunciation: '/ˈbjuːtɪfəl/',
      difficulty: 'BEGINNER',
      category: 'appearance',
      meanings: [{ partOfSpeech: 'ADJECTIVE', meaning: 'Pleasing the senses or mind aesthetically', meaningHindi: 'सुंदर', exampleSentence: 'The sunset is beautiful.' }]
    },
    {
      word: 'Excellent',
      pronunciation: '/ˈɛksələnt/',
      difficulty: 'INTERMEDIATE',
      category: 'quality',
      meanings: [{ partOfSpeech: 'ADJECTIVE', meaning: 'Extremely good; outstanding', meaningHindi: 'उत्कृष्ट', exampleSentence: 'You did an excellent job.' }]
    },
    {
      word: 'Fascinating',
      pronunciation: '/ˈfæsɪneɪtɪŋ/',
      difficulty: 'ADVANCED',
      category: 'interest',
      meanings: [{ partOfSpeech: 'ADJECTIVE', meaning: 'Extremely interesting or captivating', meaningHindi: 'आकर्षक', exampleSentence: 'The documentary was fascinating.' }]
    }
  ];

  for (const wordData of words) {
    const existing = await prisma.vocabularyWord.findUnique({ where: { word: wordData.word } });
    if (!existing) {
      const word = await prisma.vocabularyWord.create({
        data: {
          word: wordData.word,
          pronunciation: wordData.pronunciation,
          difficulty: wordData.difficulty,
          category: wordData.category,
        },
      });
      for (const meaning of wordData.meanings) {
        await prisma.vocabularyMeaning.create({
          data: { wordId: word.id, ...meaning },
        });
      }
      console.log('✅ Added word: ' + wordData.word);
    } else {
      console.log('ℹ️ Word already exists: ' + wordData.word);
    }
  }
  console.log('🌱 Seeding complete!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
