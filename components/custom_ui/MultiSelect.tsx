import React, { useState } from "react";

interface CollectionType {
  _id: string;
  title: string;
}

interface MultiSelectProps {
  placeholder: string;
  collections: CollectionType[];
  value: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  placeholder,
  collections,
  value,
  onChange,
  onRemove,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);

  let selected: CollectionType[];

  if (value.length === 0) {
    selected = [];
  } else {
    selected = value.map((id) =>
      collections.find((collection) => collection._id === id)
    ) as CollectionType[];
  }

  const selectables = collections.filter(
    (collection) => !selected.includes(collection)
  );

  return (
    <div className="relative">
      <div className="flex gap-1 flex-wrap border rounded-md p-2">
        {selected.map((collection) => (
          <span
            key={collection._id}
            className="flex items-center bg-blue-500 text-white px-2 py-1 rounded-full"
          >
            {collection.title}
            <button
              type="button"
              className="ml-1 text-white hover:text-red-500"
              onClick={() => onRemove(collection._id)}
            >
              &times;
            </button>
          </span>
        ))}

        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => setOpen(false)}
          onFocus={() => setOpen(true)}
          className="flex-1 outline-none px-2 py-1"
        />
      </div>

      {open && selectables.length > 0 && (
        <div className="absolute w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto z-10">
          {selectables.map((collection) => (
            <div
              key={collection._id}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                onChange(collection._id);
                setInputValue("");
              }}
              className="cursor-pointer px-3 py-2 hover:bg-gray-200"
            >
              {collection.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
