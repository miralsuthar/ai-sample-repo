import { DropDownSelector } from "./DropdownSelector";
import gptImage from '../assets/gpt.png';
import tensor from '../assets/tensor.png';
import bard from '../assets/bard.png';
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';
import person3 from '../assets/person3.png';
import { useState } from "react";
import { cn } from "../../utils";
import { StarIcon } from "./StarIcon";


const Models = [
  { id: 1, image: gptImage, title: "Chat GPT", version: 2.1, license: "MIT", contributors: [person1, person2, person3], rating: 4 },
  { id: 2, image: tensor, title: "TensorFlow", version: 1.1, license: "MIT", contributors: [person1, person2], rating: 3 },
  { id: 3, image: bard, title: "Bard", version: 0.5, license: "Private", contributors: [person1], rating: 3 },
  { id: 4, image: gptImage, title: "Chat GPT", version: 2.1, license: "MIT", contributors: [person1, person2, person3], rating: 4 },
  { id: 5, image: gptImage, title: "Chat GPT", version: 2.1, license: "MIT", contributors: [person1, person2, person3], rating: 4 },
  { id: 6, image: gptImage, title: "Chat GPT", version: 2.1, license: "MIT", contributors: [person1, person2, person3], rating: 4 },
  { id: 7, image: gptImage, title: "Chat GPT", version: 2.1, license: "MIT", contributors: [person1, person2, person3], rating: 4 },
  { id: 8, image: gptImage, title: "Chat GPT", version: 2.1, license: "MIT", contributors: [person1, person2, person3], rating: 4 }
]

export const FilterBar = ({ checkBoxColor, shades300 }: { checkBoxColor: string, shades300: string }) => {
  return (
    <div className="space-y-2">
      <div className="space-y-[1.125rem] p-7 bg-[#201F23] rounded-xl">
        <h1 className="text-2xl font-semibold text-white">AI Models</h1>
        <div className="flex gap-3">
          <DropDownSelector checkBoxColor={checkBoxColor} />
          <DropDownSelector checkBoxColor={checkBoxColor} />
          <DropDownSelector checkBoxColor={checkBoxColor} />
        </div>
        <div className="flex text-white/60 text-[12px]">
          <span className="w-[15.25rem]">Model</span>
          <span className="w-20">Versions</span>
          <span className="w-20">License</span>
          <span className="w-20">Contributors</span>
          <span className="w-[7.25rem] text-center">Rating</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto">
        {Models.map((model) => (
          <ModelsList key={model.id} {...model} shades300={shades300} />
        ))}
      </div>
    </div>
  )
}


type ModeListType = {
  image: string;
  title: string;
  version: number;
  license: string;
  contributors: string[];
  rating: number;
  shades300: string;
}


const ModelsList = ({ image, title, version, license, contributors, rating, shades300 }: ModeListType) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div onClick={() => setIsOpen(prev => !prev)} className={cn("flex flex-col hover:bg-[#201F23] rounded-xl transition-all duration-500 cursor-pointer", isOpen && "bg-[#201F23]")}>
      <div className="flex items-center px-7 py-2">
        <div className="flex justify-start items-center gap-2 w-[15.25rem] py-3">
          <img src={image} className="w-6 h-6" />
          <p className="text-white text-sm">{title}</p>
        </div>
        <div className="text-white/60 w-20 text-sm">v{version}</div>
        <div className="text-white/60 w-20 text-sm">{license}</div>
        <div className="flex w-20">
          {contributors.map((person, index) => (
            <img className={cn("", index > 0 && "-mr-3")} src={person} key={index} />
          ))}
        </div>
        <RatingStars rating={rating} color={shades300} />
      </div>
      <div className={cn("bg-[#17171A] overflow-hidden rounded-b-xl text-white/60 text-sm h-[0px] transition-[height] duration-1000", isOpen && "h-[100px]")}>
        <p className="px-9 py-6">
          ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.
        </p>
      </div>

    </div >
  )
}


const RatingStars = ({ rating, color }: { rating: number, color: string }) => {
  const totalStars = 5;

  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    stars.push(
      <StarIcon key={i} color={i < rating ? `${color}` : "black"} />
    )
  }

  return (
    <div className="flex w-[7.25rem]">
      {stars}
    </div>
  )
}
