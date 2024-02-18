import { HuePicker } from 'react-color'
import { useState, useEffect } from 'react'
import { generateShades } from '../utils';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { CheckboxWithTitle } from './components/CheckboxWithTitle';
import { FilterBar } from './components/FilterBar';
import { DraggableClock } from './components/DraggableClock';
import { ImageSlider } from './components/ImageSlider';
import { Loader } from './components/Loader';
import { AnimatedDropdown } from './components/AnimatedDropdown';
import { Modal } from './components/Modal';

const tasks = [
  { id: 1, value: "Frontend" },
  { id: 2, value: "Review the Design" },
  { id: 3, value: "Estimate the time" },
  { id: 4, value: "Code UI" },
  { id: 5, value: "Testing" },
  { id: 6, value: "Submit" }
]

function App() {
  const [primaryColor, setPrimaryColor] = useState("#4D54FB")
  const [shades, setShades] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const generatedShades = generateShades(primaryColor, 10);
    setShades(generatedShades);
  }, [primaryColor])

  useEffect(() => {
    const generatedShades = generateShades('#4D54FB', 10);
    setShades(generatedShades);
  }, [])


  return (
    <main className="min-h-screen max-w-screen flex flex-col py-[7.5rem] gap-4 justify-center items-center" style={{
      background: `${primaryColor}`
    }}>
      <section className='flex justify-between w-[80rem] items-center'>
        <div className='bg-[#26252A] p-4 w-max rounded-full shadow-[1px_2px_2px_0px_rgba(0,0,0,0.25)]'>
          <HuePicker className='rounded-full overflow-hidden h-4' color={primaryColor} onChange={(v) => setPrimaryColor(v.hex)} />
        </div>
        <div className='flex gap-[0.315rem] bg-[#26252A] p-4 rounded-full w-max shadow-[1px_2px_2px_0px_rgba(0,0,0,0.25)]'>
          {shades?.map((color, i) => (
            <div style={{ backgroundColor: color, }} className='h-4 w-20 rounded-full' key={i}></div>
          ))}
        </div>
      </section>
      <section className='p-4 bg-[#17171A] w-[80rem] h-[54.3125rem] shadow-mainShadow rounded-[1.5rem] relative'>
        <PanelGroup direction='vertical'>
          <Panel defaultSize={60}>
            <PanelGroup direction='horizontal'>
              <Panel minSize={20} defaultSize={20}>
                <div className='w-full h-full pl-8 pt-8 bg-[#26252A] space-y-6 rounded-xl'>
                  <h1 className='text-2xl font-semibold text-white'>Today's Task</h1>
                  <div className='flex flex-col gap-4'>
                    {tasks.map((task) => (
                      <CheckboxWithTitle title={task.value} primaryColor400={shades[3]} key={task.id} />
                    ))}
                  </div>
                </div>
              </Panel>
              <PanelResizeHandle className="w-2 h-full my-auto duration-500 transition-all rounded-full mx-1"> <div className='w-full h-[5%] mt-64 bg-white/20 rounded-full' /> </PanelResizeHandle>
              <Panel minSize={50} defaultSize={60}>
                <div className='w-full h-full overflow-y-auto  bg-[#26252A] rounded-xl p-1'>
                  <FilterBar checkBoxColor={shades[3]} shades300={shades[2]} />
                </div>
              </Panel>
              <PanelResizeHandle className="w-2 h-full my-auto duration-500 transition-all rounded-full mx-1"> <div className='w-full h-[5%] mt-64 bg-white/20 rounded-full' /> </PanelResizeHandle>
              <Panel defaultSize={20}>
                <div className='w-full h-full bg-[#26252A] rounded-xl overflow-hidden'>
                  <DraggableClock shades200={shades[1]} />
                </div>
              </Panel>
            </PanelGroup>
          </Panel>
          <PanelResizeHandle className="w-full h-2 mx-auto duration-500 transition-all rounded-full"> <div className='bg-white/20 mx-auto h-full w-[5%] rounded-full' /> </PanelResizeHandle>
          <Panel defaultSize={20} maxSize={30} minSize={20} >
            <div className='w-full flex h-full p-8 bg-[#26252A] rounded-xl'>
              <ImageSlider color={shades[5]} />
              <Loader shades100={shades[0]} />
              <div className='ml-auto'>
                <AnimatedDropdown />
                {isModalOpen && <Modal shades300={shades[2]} shades400={shades[3]} shades500={shades[4]} shades600={shades[5]} shades700={shades[6]} className='absolute bottom-28 right-5' />}
                <button onClick={() => setIsModalOpen(prev => !prev)} className='w-16 h-16 flex justify-center absolute bottom-10 right-10 items-center shadow-[3px_6px_10px_0_rgba(0,0,0,0.15)] rounded-full' style={{
                  background: !isModalOpen ? `${shades[5]}` : '#141417'
                }}>
                  {isModalOpen ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 10.7691L5.23105 4L4.00029 5.23076L10.7694 11.9998L4 18.7692L5.23076 19.9999L12.0001 13.2306L18.7694 19.9999L20.0002 18.7691L13.2309 11.9998L19.9999 5.23083L18.7691 4.00007L12.0001 10.7691Z" fill="white" />
                  </svg>) : (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6364 0L18.2618 3L15.2727 4.36364L18.2618 5.73818L19.6364 8.72727L21 5.73818L24 4.36364L21 3M8.72727 3.27273L6 9.27273L0 12L6 14.7273L8.72727 20.7273L11.4545 14.7273L17.4545 12L11.4545 9.27273M19.6364 15.2727L18.2618 18.2618L15.2727 19.6364L18.2618 21L19.6364 24L21 21L24 19.6364L21 18.2618" fill="white" />
                  </svg>)}
                </button>
              </div>
            </div>
          </Panel>
        </PanelGroup>
      </section>
    </main>

  )
}

export default App
