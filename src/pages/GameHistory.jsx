function GameHistory() {
  const timeline = [
    {
      year: 2009,
      events: [
        'May 17: Markus "Notch" Persson begins development of Minecraft',
        'Classic version released',
      ]
    },
    {
      year: 2010,
      events: [
        'Survival mode introduced',
        'Alpha version released',
        'Multiplayer mode added',
      ]
    },
    {
      year: 2011,
      events: [
        'Beta version released',
        'November 18: Full release of Minecraft 1.0',
        'Mojang Studios established',
      ]
    },
    {
      year: 2014,
      events: [
        'September 15: Microsoft acquires Mojang Studios and Minecraft for $2.5 billion',
      ]
    },
    {
      year: 2016,
      events: [
        'Minecraft: Education Edition released',
        'Minecraft reaches 100 million sales',
      ]
    },
    {
      year: 2020,
      events: [
        'Nether Update released',
        'Minecraft reaches 200 million sales',
        'RTX support added for Windows 10 Edition',
      ]
    },
    {
      year: 2023,
      events: [
        'Trails & Tales Update (1.20) released',
        'Minecraft surpasses 300 million copies sold',
      ]
    },
  ];

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Minecraft History</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">The Story of Minecraft</h2>
          <p className="text-gray-700 mb-4">
            Minecraft began as a small independent game created by Swedish programmer Markus "Notch" Persson.
            What started as a simple block-building game has evolved into one of the most successful and
            influential video games of all time.
          </p>
        </div>

        <div className="space-y-6">
          {timeline.map(({ year, events }) => (
            <div key={year} className="border-l-4 border-green-600 pl-4">
              <h3 className="text-xl font-bold text-green-800 mb-2">{year}</h3>
              <ul className="space-y-2">
                {events.map((event, index) => (
                  <li key={index} className="text-gray-700">{event}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Microsoft Acquisition</h2>
          <p className="text-gray-700 mb-4">
            In 2014, Microsoft acquired Mojang Studios and the Minecraft intellectual property for $2.5 billion.
            Under Microsoft's ownership, Minecraft has continued to grow and expand, reaching new platforms
            and audiences while maintaining its core creative gameplay.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Legacy and Impact</h2>
          <p className="text-gray-700">
            Minecraft has become more than just a game - it's a cultural phenomenon that has influenced
            education, art, and community building. With hundreds of millions of copies sold, it stands
            as one of the most successful video games ever created, continuing to evolve and inspire
            new generations of players.
          </p>
        </div>
      </section>
    </div>
  );
}

export default GameHistory;