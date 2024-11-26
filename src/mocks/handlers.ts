import { http, HttpResponse } from 'msw'

const User = [
  { id: 'elonmusk', nickname: 'Elon Musk', image: '/yRsRRjGO.jpg' },
  { id: 'holicholicpop', nickname: '인쮸', image: '/5Udwvqim.jpg' },
  { id: 'leoturtle', nickname: '레오', image: null },
]
export const handlers = [
  http.post('/api/login', async ({ request }) => {
    const data = await request.json()
    let status = 200
    return HttpResponse.json(User[1], {
      status,
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
      },
    })
  }),
  http.post('/api/logout', (info) => {
    return HttpResponse.json(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
      },
    })
  }),

  http.post('/api/signup', async ({ request }) => {
    const formData = await request.formData()
    let status = 200
    const data = {
      id: formData.get('id'),
      nickname: formData.get('nickname'),
      image: null,
      followerNumber: 0,
      followNumber: 0,
    }

    if (!!(formData.get('image') as File).size) {
      const imageFormData = new FormData()
      imageFormData.append('file', formData.get('111') as File)
      imageFormData.append('upload_preset', 'ml_default')
      imageFormData.append('api_key', '898322762185571')
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/diuiwn91v/image/upload`,
        {
          method: 'POST',
          body: imageFormData,
        }
      ).then((res) => {
        status = res.status
        return res
      })
      if (status === 200) {
        const result = await response.json()
        return HttpResponse.json(
          { ...data, image: result.url },
          {
            status,
            headers: {
              'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
            },
          }
        )
      } else {
        return HttpResponse.json(null, {
          status,
        })
      }
    }
    return HttpResponse.json(data, {
      status,
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
      },
    })
    // if (status === 200) {
    //   const userInfo = {
    //     id: formData.get('id'),
    //     nickname: formData.get('nickname'),
    //     image,
    //     followerNumber: 1,
    //     followNumber: 0,
    //   }

    // } else {

    // }
  }),
]
