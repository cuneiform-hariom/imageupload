"use client"

import { useFormik } from 'formik'

export default function Home() {

  const initialValues = {
    image: undefined
  }

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const data = new FormData()
      data.set("file", values.image)
      const res = await fetch("api/upload", {
        method: "POST",
        body: data
      })
      console.log('res: ', res);
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/png, image/jpeg, image/webp, image/jpg"
          onChange={(event) => formik.setFieldValue("image", event.target.files[0])}
          onBlur={formik.handleBlur}
        />
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}
