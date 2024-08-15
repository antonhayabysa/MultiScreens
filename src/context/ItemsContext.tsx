import React, {createContext, useContext, useState} from 'react';

type Item = {id: string; size: {width: number; height: number}};

type ItemsContextType = {
  items: Item[][];
  addItem: (width: number, height: number) => void;
  editItem: (
    slideIndex: number,
    itemIndex: number,
    width: number,
    height: number,
  ) => void;
  deleteItem: (slideIndex: number, itemIndex: number) => void;
};

const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

export const ItemsProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [items, setItems] = useState<Item[][]>([]);

  const addItem = (width: number, height: number) => {
    const newItem = {
      id: `${Date.now()}-${items.length}`,
      size: {width, height},
    };
    const lastSlide = items[items.length - 1];

    if (lastSlide && lastSlide.length < 8) {
      const updatedSlides = [...items];
      updatedSlides[items.length - 1] = [...lastSlide, newItem];
      setItems(updatedSlides);
    } else {
      setItems([...items, [newItem]]);
    }
  };

  const editItem = (
    slideIndex: number,
    itemIndex: number,
    width: number,
    height: number,
  ) => {
    const updatedItems = items.map((slide, sIndex) =>
      sIndex === slideIndex
        ? slide.map((item, i) =>
            i === itemIndex ? {...item, size: {width, height}} : item,
          )
        : slide,
    );
    setItems(updatedItems);
  };

  const deleteItem = (slideIndex: number, itemIndex: number) => {
    const updatedItems = items
      .map((slide, sIndex) =>
        sIndex === slideIndex ? slide.filter((_, i) => i !== itemIndex) : slide,
      )
      .filter(slide => slide.length > 0);
    setItems(updatedItems);
  };

  return (
    <ItemsContext.Provider value={{items, addItem, editItem, deleteItem}}>
      {children}
    </ItemsContext.Provider>
  );
};

export const useItems = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error('useItems must be used within an ItemsProvider');
  }
  return context;
};
