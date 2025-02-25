function GettingStarted() {
  const requirements = {
    minimum: {
      os: ['Windows: Windows 10', 'macOS: macOS 10.14 Mojave', 'Linux: Any modern distribution from 2014 onwards'],
      cpu: 'Intel Core i3-3210 / AMD A8-7600 APU or equivalent',
      ram: '4GB RAM',
      gpu: 'Integrated: Intel HD Graphics 4000 or AMD Radeon R5 series',
      storage: '1GB for game core and basic worlds',
    },
    recommended: {
      cpu: 'Intel Core i5-4690 / AMD A10-7800 or equivalent',
      ram: '8GB RAM',
      gpu: 'NVIDIA GeForce 700 Series or AMD Radeon Rx 200 Series',
      storage: '4GB+ for multiple worlds, texture packs, and mods',
    },
  };

  const controls = {
    basic: [
      { key: 'W, A, S, D', action: 'Movement' },
      { key: 'Space', action: 'Jump' },
      { key: 'Left Click', action: 'Break blocks' },
      { key: 'Right Click', action: 'Place blocks/Use items' },
      { key: 'E', action: 'Open inventory' },
      { key: 'Q', action: 'Drop item' },
      { key: 'Shift', action: 'Sneak' },
      { key: 'Double Space', action: 'Toggle flight (Creative mode)' },
    ],
  };

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Getting Started with Minecraft</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Purchase</h2>
          <div className="space-y-4">
            <p>Minecraft can be purchased from:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <a
                  href="https://www.minecraft.net/store"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official Minecraft Website
                </a>
              </li>
              <li>Microsoft Store (Windows 10/11 Edition)</li>
              <li>Mobile app stores (Pocket Edition)</li>
              <li>Console digital stores (PlayStation, Xbox, Nintendo)</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">System Requirements</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Minimum Requirements</h3>
              <ul className="space-y-2">
                {Object.entries(requirements.minimum).map(([key, value]) => (
                  <li key={key} className="flex flex-col">
                    <span className="font-medium capitalize">{key}:</span>
                    {Array.isArray(value) ? (
                      <ul className="list-disc list-inside ml-4">
                        {value.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <span className="ml-4">{value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Recommended Requirements</h3>
              <ul className="space-y-2">
                {Object.entries(requirements.recommended).map(([key, value]) => (
                  <li key={key} className="flex flex-col">
                    <span className="font-medium capitalize">{key}:</span>
                    <span className="ml-4">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Basic Controls</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {controls.basic.map((control, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <span className="font-bold">{control.key}</span>
                <span className="mx-2">-</span>
                <span>{control.action}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Survival Mode Basics</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">First Day Checklist</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Punch trees to collect wood</li>
                <li>Create a crafting table</li>
                <li>Make basic tools (wooden pickaxe, axe)</li>
                <li>Gather stone to make better tools</li>
                <li>Find or create shelter before nightfall</li>
                <li>Make a bed (requires 3 wool and 3 wooden planks)</li>
                <li>Create torches for light</li>
                <li>Start gathering food</li>
              </ol>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Basic Survival Tips</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Always keep your hunger bar full</li>
                <li>Don't dig straight down</li>
                <li>Keep your shelter well-lit to prevent mob spawning</li>
                <li>Start a farm as soon as possible</li>
                <li>Mark your base location or write down coordinates</li>
                <li>Always carry a bed to reset your spawn point</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GettingStarted;