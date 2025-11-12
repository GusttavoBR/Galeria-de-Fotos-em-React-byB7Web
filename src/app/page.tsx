'use client'

import { Modal } from "@/components/Modal";
import { PhotoItem } from "@/components/PhotoItem";
import { pictureList } from "@/data/pictureList";
import { useState } from "react"

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [imageOfModal, setImageOfModal] = useState('')

  const openModal = (id: number) => {
    const photo = pictureList.find(i => i.id === id);
    if (photo) {
      setImageOfModal(photo.url)
      setShowModal(true)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="">
      <h1 className="text-center font-bold text-5xl my-10">Fotos Interplanetárias</h1>
      <section className="container max-w-5xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-8 mx-auto">
        {pictureList.map(i =>
          <PhotoItem
            key={i.id}
            photo={i}
            onClick={() => { openModal(i.id) }}
          />
        )}
      </section>

      {showModal &&
        <Modal
          image={imageOfModal}
          closeModal={closeModal}
        />
      }

    </div>
  )
}
