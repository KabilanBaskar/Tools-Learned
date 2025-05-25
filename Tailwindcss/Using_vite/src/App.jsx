
import './App.css'

function App() {

  return (
    <div>
      {/* Typography */}
      <h1 className="font-bold py-4 underline text-lg">Typography :</h1>
      <p className="font-sans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint optio at, aliquam deserunt repellat, ratione quaerat possimus, quisquam perspiciatis expedita sequi cupiditate quidem debitis reprehenderit vero aperiam suscipit sed voluptatem?</p>
      <p className="font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ratione assumenda aperiam a, quis iure rerum nihil recusandae labore? Sint illum numquam fuga perferendis modi et facilis excepturi perspiciatis quo.</p>
      <p className="font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam, voluptates sapiente tenetur reprehenderit officia. Non, fuga ducimus. Numquam accusantium amet corrupti, nesciunt aut velit sit vel et nulla consequuntur?</p>
      <p className="font-Exile">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aspernatur saepe qui pariatur, facere quas maiores dolor deleniti, mollitia optio impedit! Vel natus ipsa distinctio voluptatem optio provident blanditiis veniam.</p>
      {/* Size */}
      <h1 className="font-bold py-4 underline text-lg">Text size :</h1>
      <p className="text-xs">extra small</p>
      <p className="text-sm">small text</p>
      <p className="text-base">base text</p>
      <p className="text-lg">large text</p>
      <p className="text-xl">extra large</p>
      {/* Responsive text size */}
      <h1 className="font-bold py-4 underline text-lg">Responsive Text :</h1>
      <p className="text-base md:text-xs lg:text-xl">Responsive text - text-base md and lg</p>
      {/* colors */}
      <h1 className="font-bold py-4 underline text-lg">Colors :</h1>
      <div className="h-9 bg-red-300"></div>
      <p className="text-red-400">text color</p>
      {/* buttons */}
      <h1 className="font-bold py-4 underline text-lg">Buttons :</h1>
      {/* Padding & Margin */}
      <button className='bg-purple-500 text-white font-bold p-3 ml-5'>Padding and Margin</button>
      {/* border & hover */}
      <button className='bg-green-500 text-white font-bold p-3 ml-5 border-3 border-slate-800 rounded-xl hover:text-black'>Border and Hover</button>
      {/* Layout */}
      <h1 className="font-bold py-4 underline text-lg">Layout :</h1>
      <div className="container relative h-auto border-2 border-red-500 mt-0 mx-auto rounded-lg">
        <h1 className="p-3 text-xl font-bold"> Heading :</h1>
        <p className="text-base pl-8 pb-8 pr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum repudiandae in ab corrupti doloremque. Deleniti, fugit! Modi voluptatem enim iste consequatur repudiandae labore sint illo illum amet, debitis unde dolorum repellat cumque beatae explicabo nisi delectus voluptate impedit atque corporis eos libero! Tempore iusto aliquid exercitationem, explicabo ex assumenda perferendis ducimus unde quas, porro deleniti quod nesciunt! Ipsum, inventore mollitia! Corrupti, fugit a! Itaque omnis non iste tempore quaerat cupiditate dignissimos earum in totam temporibus neque alias, doloremque provident deserunt placeat inventore consectetur ea soluta eius. Voluptatem dolorem nostrum iusto saepe asperiores quidem. Repellendus provident vitae animi magni commodi quaerat.</p>
        <div className="flex">
          <button className='absolute bottom-0 translate-y-8 bg-green-500 text-white font-bold p-2 px-4 ml-6 mt-2 mb-2 border-3 border-slate-800 rounded-3xl hover:text-black'>Read More</button>
        </div>
      </div>
      {/* Responsive class */}
      <h1 className="font-bold py-4 underline text-lg">Responsive class :</h1>
      <div className="bg-yellow-500 md:bg-orange-500 lg:bg-sky-300 h-10 mt-0"></div>
      {/* Flexbox and align item for column axis only */}
      <h1 className="font-bold py-4 underline text-lg">Align items :</h1>
      <div className="flex container flex-col items-center">
        <div className='bg-yellow-200'>content1</div>
        <div className='bg-orange-400'>content2</div>
        <div className='bg-red-600'>content3</div>
      </div>
      {/* justify content for main axis only --> */}
      <h1 className="font-bold py-4 underline text-lg">Justify content :</h1>
      <div className="flex container justify-evenly">
        <div className='bg-sky-200'>content1</div>
        <div className='bg-blue-400'>content2</div>
        <div className='bg-purple-600'>content3</div>
      </div>
      {/* Flex grow */}
      <h1 className="font-bold py-4 underline text-lg">Flex Grow :</h1>
      <div className="flex container">
        <div className='bg-sky-200 flex-grow-0'>content1</div>
        <div className='bg-blue-400 flex-grow-1'>content2</div>
        <div className='bg-purple-600 flex-grow-2'>content3</div>
      </div>
      {/* Grid */}
      <h1 className="font-bold py-4 underline text-lg">Grid :</h1>
      <div className="grid container grid-cols-4 gap-1">
        <div className='bg-sky-200'>content1</div>
        <div className='bg-blue-400'>content2</div>
        <div className='bg-purple-600'>content3</div>
        <div className="bg-black text-white">content4</div>
      </div>
      {/* Dark Mode */}
      <h1 className="font-bold py-4 underline text-lg">Dark Mode :</h1>
      <button className="bg-black text-white p-4 ml-10 mb-10 px-10 border rounded-4xl hover:bg-white hover:text-black">Mode</button>
      {/* Extended adding any color or property in tailwind config file*/}
      {/* override option responsive when md lg sm */}
      

    </div>
  )
}

export default App
