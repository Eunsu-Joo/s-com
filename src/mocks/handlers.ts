import { http, HttpResponse } from 'msw'
import { faker } from '@faker-js/faker'

const generateData = () => {
  const lastWeek = new Date()
  lastWeek.setDate(lastWeek.getDate() - 7)
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  })
}
const fakerImageArray = [
  'https://plus.unsplash.com/premium_photo-1664104722498-7fa26de2144d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1725994390784-1ab5232a387d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1720048171080-78849cff8b19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1730727384555-35318cb80600?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1725892604041-fe689d020149?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1731243769111-90fec6f9c7f3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1731085798307-8c58cd101b98?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]
const Users = [
  {
    id: 'elonmusk',
    nickname: 'Elon Musk',
    image:
      'https://res.cloudinary.com/diuiwn91v/image/upload/v1732238989/myson_grkwsb.jpg',
    followerNumber: 10,
    followNumber: 110,
    isFollowing: false,
  },
  {
    id: 'elonmusk23',
    nickname: 'Elon Musk',
    image:
      'https://res.cloudinary.com/diuiwn91v/image/upload/v1732238989/myson_grkwsb.jpg',
    followerNumber: 10,
    followNumber: 110,
    isFollowing: false,
  },
  {
    id: 'elonmusk23',
    nickname: 'Elon Musk',
    image:
      'https://res.cloudinary.com/diuiwn91v/image/upload/v1732238989/myson_grkwsb.jpg',
    followerNumber: 10,
    followNumber: 32423,
    isFollowing: false,
  },
  {
    id: 'holicholicpop',
    nickname: '인쮸',
    image:
      'https://res.cloudinary.com/diuiwn91v/image/upload/v1732238989/myson_grkwsb.jpg',
    followerNumber: 10,
    followNumber: 110,
    isFollowing: false,
  },
  {
    id: 'leoturtle',
    nickname: '레오',
    image: null,
    followerNumber: 10,
    followNumber: 110,
    isFollowing: false,
  },
  {
    id: 'leoturtle',
    nickname: '레오1234',
    image: null,
    followerNumber: 234,
    followNumber: 23,
    isFollowing: false,
  },
]
const post = {
  user: Users[0],
  contents: '내용123456789',
  images: Array.from({ length: 4 }).map((_, index) => ({
    url: fakerImageArray[index + 1],
    name: '1234' + index,
    imageId: index + 1,
    width: 510,
    height: 320,
  })),
  comments: 34,
  retweets: {
    retweeted: true,
    retweetCount: 44,
  },
  likes: {
    likeCount: 123,
    liked: true,
  },
  postId: 1,
  createdAt: generateData(),
}
const posts = Array.from({ length: 30 }).map((_, index) => {
  return {
    ...post,
    contents: '내용' + (index + 1),
    postId: index + 1,
    user: Users[Math.floor(Math.random() * 3)],
    images: Array.from({ length: Math.floor(Math.random() * 5) }).map(
      (_, index) => ({
        url: fakerImageArray[index],
        name: '1234' + index,
        imageId: index + 1,
        width: 510,
        height: 320,
      })
    ),
  }
})
const trend = {
  tagId: 1,
  title: '키워드',
  count: Math.floor(Math.random() * 100),
}

export const handlers = [
  http.post('/api/login', async ({ request }) => {
    const data = await request.json()
    // let status = 200
    return HttpResponse.json(Users[1], {
      status: 200,
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
  http.get('/api/posts', async () => {
    return HttpResponse.json(posts, {
      status: 200,
      // headers: {
      //   'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
      // },
    })
  }),
  http.get('/api/postsRecommend', async ({ request }) => {
    const url = new URL(request.url)
    const cursor = +(url.searchParams.get('cursor') as string) || 0
    const data = posts.slice(cursor, cursor + 5)
    return HttpResponse.json(data, {
      status: 200,
    })
  }),
  http.get('/api/postsFollowing', async ({ request }) => {
    const url = new URL(request.url)
    const cursor = +(url.searchParams.get('cursor') as string) || 0
    const following = posts
      .map((post, index) => ({
        ...post,
        contents: '팔로잉' + (index + 1),
      }))
      .slice(0, 10)
    const data = following.slice(cursor, cursor + 5)
    return HttpResponse.json(data, {
      status: 200,
    })
  }),
  http.get('/api/posts/:postId', async ({ request, params }) => {
    const { userId, postId } = params
    const data = posts.find((post) => post.postId === +postId + 1)
    if (!data)
      return HttpResponse.json(null, {
        status: 404,
      })
    return HttpResponse.json(data, {
      status: 200,
    })
  }),
  http.get('/api/posts/:postId/comments', async ({ request, params }) => {
    const { userId, postId } = params
    const data = Array.from({ length: Math.floor(Math.random() * 20) }).map(
      (_, index) => ({
        ...post,
        postId: index.toString(),
        contents: '코멘트내용' + index.toString(),
        images: Array.from({ length: Math.floor(Math.random() * 5) }).map(
          (_, index) => ({
            url: fakerImageArray[index],
            name: '1234' + index,
            imageId: index + 1,
            width: 510,
            height: 320,
          })
        ),
      })
    )

    return HttpResponse.json(data, {
      status: 200,
    })
  }),
  http.get('/api/search/:tag', async ({ request, params }) => {
    const { tag } = params
    const data = Array.from({ length: 20 }).map((_, index) => {
      return {
        ...post,
        postId: index + 1,
        contents: '검색결과 ' + index.toString(),
        images: Array.from({ length: Math.floor(Math.random() * 5) }).map(
          (_, index) => ({
            url: fakerImageArray[index],
            name: '1234' + index,
            imageId: index + 1,
            width: 510,
            height: 320,
          })
        ),
      }
    })
    return HttpResponse.json(data, {
      status: 200,
      // headers: {
      //   'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
      // },
    })
  }),

  http.get('/api/user/:userId', async ({ request, params }) => {
    const { userId } = params
    const data = Users.find((user) => user.id === userId)
    if (!data)
      return HttpResponse.json(null, {
        status: 404,
      })
    return HttpResponse.json(data, {
      status: 200,
    })
  }),
  http.get('/api/user/:userId/posts', async ({ request, params }) => {
    const { userId } = params
    const user = Users.find((user) => user.id === userId)
    if (!user)
      return HttpResponse.json(null, {
        status: 404,
      })
    const data = Array.from({ length: Math.floor(Math.random() * 10) }).map(
      (_, index) => ({
        ...post,
        postId: index.toString(),
        contents: '상세내용' + index.toString(),
        images: Array.from({ length: Math.floor(Math.random() * 5) }).map(
          (_, index) => ({
            url: fakerImageArray[index],
            name: '1234' + index,
            imageId: index + 1,
            width: 510,
            height: 320,
          })
        ),
      })
    )

    return HttpResponse.json(data, {
      status: 200,
    })
  }),
  http.get('/api/trends', async ({ request }) => {
    const data = Array.from({ length: 10 }).map((_, index) => ({
      ...trend,
      tagId: index,
      title: '트렌드' + index.toString(),
    }))
    return HttpResponse.json(data, {
      status: 200,
    })
  }),
  http.get('/api/followRecommend', async ({ request }) => {
    return HttpResponse.json(Users, {
      status: 200,
    })
  }),
]
