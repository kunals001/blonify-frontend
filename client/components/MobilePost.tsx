import React from 'react'
import Head from './headingscom'
import Input from './InputPost'

const MobilePost = () => {
  return (
    <div className='w-full flex flex-col gap-2'>

        {/* Network */}
       <Head text={"Network"} />
        <div className="flex flex-col gap-2">
            <Input name={"technology"} type={"text"} placeholder={"Technology for laptop Gpu GDDR"} />
            <Input name={"towbands"} type={"text"} placeholder={"Towbands"} />
            <Input name={"threebands"} type={"text"} placeholder={"Threebands"} />
            <Input name={"fourbands"} type={"text"} placeholder={"Fourbands"} />
            <Input name={"fivebands"} type={"text"} placeholder={"Fivebands"} />
            <Input name={"speed"} type={"text"} placeholder={"Speed"} />
        </div>

        {/* Launch */}
        <Head text={"Launch"} />

         <div className="flex flex-col gap-2">
            <Input name={"date"} type={"text"} placeholder={"announce date or laptop launch date"} />
            <Input name={"status"} type={"text"} placeholder={"status or laptop status"} />
        </div>

        {/* Body */}

        <Head text={"Body"} />

         <div className="flex flex-col gap-2">
            <Input name={"dimensions"} type={"text"} placeholder={"Dimensions or laptop dimensions"} />
            <Input name={"weight"} type={"text"} placeholder={"Weight or laptop weight"} />
            <Input name={"build"} type={"text"} placeholder={"Build or laptop body build"} />
            <Input name={"sim"} type={"text"} placeholder={"Sim or laptop sim"} />
        </div>

        {/* Display */}

        <Head text={"Display"} />

         <div className="flex flex-col gap-2">
            <Input name={"type"} type={"text"} placeholder={"Type or laptop type"} />
            <Input name={"size"} type={"text"} placeholder={"Size or laptop size"} />
            <Input name={"resolution"} type={"text"} placeholder={"Resolution or laptop resolution"} />
            <Input name={"refreshrate"} type={"text"} placeholder={"Refreshrate or laptop refreshrate"} />
            <Input name={"protection"} type={"text"} placeholder={"Protection or laptop protection"} />
            <Input name={"pixle"} type={"text"} placeholder={"Pixle or laptop pixle"} />
            <Input name={"big"} type={"text"} placeholder={"Big or laptop big"} />
        </div>

        {/* Platform */}

        <Head text={"Platform"} />

         <div className="flex flex-col gap-2">
            <Input name={"os"} type={"text"} placeholder={"Os or laptop os"} />
            <Input name={"osversion"} type={"text"} placeholder={"osversion for laptop is null"} />
            <Input name={"chipset"} type={"text"} placeholder={"Chipset or laptop null"} />
            <Input name={"gpu"} type={"text"} placeholder={"Gpu or laptop gpu"} />
            <Input name={"cpu"} type={"text"} placeholder={"Cpu or laptop cpu"} />
            <Input name={"process"} type={"text"} placeholder={"Process or laptop process"} />
            <Input name={"ram"} type={"text"} placeholder={"Ram or laptop ram"} />
        </div>

        {/* Memory */}

        <Head text={"Memory"} />

         <div className="flex flex-col gap-2">
            <Input name={"cardslot"} type={"text"} placeholder={"Cardslot or laptop null"} />
            <Input name={"ram"} type={"text"} placeholder={"Ram or laptop ram"} />
            <Input name={"storage"} type={"text"} placeholder={"Storage or laptop storage"} />
        </div>


         {/* Performance */}

        <Head text={"Performance"} />

         <div className="flex flex-col gap-2">
            <Input name={"antutuscore"} type={"text"} placeholder={"Antutu Score"} />
            <Input name={"geeksbenchscore"} type={"text"} placeholder={"Geeksbench Score"} />
            <Input name={"fps"} type={"text"} placeholder={"Fps"} />
        </div>


        {/* Battery */}

        <Head text={"Battery"} />

         <div className="flex flex-col gap-2">
            <Input name={"type"} type={"text"} placeholder={"Type or laptop type"} />
            <Input name={"capacity"} type={"text"} placeholder={"Capacity or laptop capacity"} />
            <Input name={"fastcharge"} type={"text"} placeholder={"Fastcharge or laptop fastcharge"} />
            <Input name={"gamingbackup"} type={"text"} placeholder={"Gamingbackup or laptop gamingbackup"} />
            <Input name={"standbybackup"} type={"text"} placeholder={"Standbybackup or laptop standbybackup"} />
            <Input name={"mah"} type={"text"} placeholder={"Mah or laptop mah"} />
            <Input name={"wiredcharge"} type={"text"} placeholder={"Wiredcharge or laptop wiredcharge"} />
            <Input name={"wirelesscharge"} type={"text"} placeholder={"Wirelesscharge or laptop wirelesscharge"} />
        </div>



        <Head text={"Main Camera"} />

         <div className="flex flex-col gap-2">
            <Input name={"type"} type={"text"} placeholder={"Main Camera Type or laptop type"} />
            <Input name={"mp"} type={"text"} placeholder={"Mp"} />
            <Input name={"resolution"} type={"text"} placeholder={"Resolution"} />
            <Input name={"zoom"} type={"text"} placeholder={"Zoom"} />
            <Input name={"features"} type={"text"} placeholder={"Features"} />
            <Input name={"videofps"} type={"text"} placeholder={"Video Fps"} />
            <Input name={"mega"} type={"text"} placeholder={"Mega or laptop mega"} />
            <Input name={"pixel"} type={"text"} placeholder={"Pixel or laptop pixel"} />
        </div>


          {/* Front Camera */}

        <Head text={"Front Camera"} />

         <div className="flex flex-col gap-2">
            <Input name={"type"} type={"text"} placeholder={"Selfie Camera Type or laptop type"} />
            <Input name={"mp"} type={"text"} placeholder={"Mp or laptop mp"} />
            <Input name={"resolution"} type={"text"} placeholder={"Resolution or laptop resolution"} />
            <Input name={"features"} type={"text"} placeholder={"Features or laptop features"} />
            <Input name={"videofps"} type={"text"} placeholder={"Video Fps or laptop videofps"} />
        </div>

        {/* Sound */}

        <Head text={"Sound"} />

         <div className="flex flex-col gap-2">
            <Input name={"speaker"} type={"text"} placeholder={"Speaker"} />
            <Input name={"headphonejack"} type={"text"} placeholder={"Headphone Jack"} />
            <Input name={"quality"} type={"text"} placeholder={"Quality"} />
        </div>

        {/* Comms */}

        <Head text={"Comms"} />

         <div className="flex flex-col gap-2">
            <Input name={"wifi"} type={"text"} placeholder={"Wifi"} />
            <Input name={"bluetooth"} type={"text"} placeholder={"Bluetooth"} />
            <Input name={"gps"} type={"text"} placeholder={"Gps or laptop USB"} />
            <Input name={"nfc"} type={"text"} placeholder={"Nfc"} />
        </div>


         {/* Features */}

        <Head text={"Features"} />

         <div className="flex flex-col gap-2">
            <Input name={"sensor"} type={"text"} placeholder={"Sensor or laptop sensor"} />
            <Input name={"fingerprint"} type={"text"} placeholder={"Fingerprint or laptop fingerprint"} />
            <Input name={"faceunlock"} type={"text"} placeholder={"Faceunlock or laptop faceunlock"} />
            <Input name={"ir"} type={"text"} placeholder={"Ir"} />
        </div>

        {/* Mics */}

        <Head text={"Mics"} />

         <div className="flex flex-col gap-2">
            <Input name={"color"} type={"text"} placeholder={"Color"} />
            <Input name={"quality"} type={"text"} placeholder={"Quality"} />
            <Input name={"model"} type={"text"} placeholder={"Model"} />
            <Input name={"price"} type={"text"} placeholder={"Price"} />
        </div>

        <div className="w-full flex gap-[2vw]">
          <select name='ismobile' className='px-[.5vw] py-[.5vw] outline-none rounded-xl bg-zinc-100 text-[1vw] cursor-pointer h-[2.7vw] border-1 border-prime w-full'>
            <option value="false" >ismobile</option>
            <option value='true' >true</option>
          </select>

          <select name='islaptop' className='px-[.5vw] py-[.5vw] outline-none rounded-xl bg-zinc-100 text-[1vw] cursor-pointer h-[2.7vw] border-1 border-prime w-full'>
            <option value="false" >islaptop</option>
            <option value='true' >true</option>
          </select>


          <select name='isdaily' className='px-[.5vw] py-[.5vw] outline-none rounded-xl bg-zinc-100 text-[1vw] cursor-pointer h-[2.7vw] border-1 border-prime w-full'>
            <option value="false" >isDaily</option>
            <option value='true' >true</option>
          </select>

          <select name='isFeatured' className='px-[.5vw] py-[.5vw] outline-none rounded-xl bg-zinc-100 text-[1vw] cursor-pointer h-[2.7vw] border-1 border-prime w-full'>
            <option value="false" >isFeatured</option>
            <option value='true' >true</option>
          </select>
        </div>
    </div>
  )
}

export default MobilePost