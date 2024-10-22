import {memo, useCallback, useState} from 'react'

const ProffessionInput = memo(({selectedProffession, setSelectedProffession}) => {
    const [isOpen, setIsOpen] = useState(false);

    const proffessions = ["Frontend Developer", "Backend Developer", "Full Stack Developer","Flutter Developer"];

    const handleSelect = useCallback((proffession) => {
        setSelectedProffession(proffession)
        setIsOpen(!isOpen)
    })

  return (
    <div className='relative'>
    <input
      type="text"
      placeholder="Proffesion"
      name="proffession"
      className="w-72 px-4 py-2 rounded-lg border-[1px] border-gray-200 focus:outline-none mb-5"
      onClick={()=>{setIsOpen(!isOpen)}}
      value={selectedProffession}
      readOnly
    />

    {
        isOpen && (
            <div className="absolute top-10 left-0 w-full border border-gray-300 bg-white rounded-lg z-10">
          {proffessions.map((proffession, index) => (
            <div
              key={index}
              onClick={() => handleSelect(proffession)}
              className="px-2 py-1 border-b-[1px] border-gray-400 rounded-lg font-sneaky text-[12px] hover:bg-gray-200 cursor-pointer"
            >
              {proffession}
            </div>
          ))}
        </div>
    )}
    </div>
  )
});

export default ProffessionInput