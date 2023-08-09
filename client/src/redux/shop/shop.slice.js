import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchDocuments } from '../../firebase/firebase.utils'
import * as icons from '@fortawesome/free-solid-svg-icons'

const { faCloudSunRain, faUserFriends, faPlay, faMarker, faChartLine } = icons

const asyncFunctions = {
  async fetchCollections() {
    const collections = await fetchDocuments('categories')
    Object.values(collections).forEach(collection => {
      collection.routeName = encodeURI(collection.title.toLowerCase())
    })
    return { collections }
  },
  async fetchSections() {
    const result = await fetchDocuments('sections')
    // set the icon from font awesome by name, then sort by their "order" field
    const sections = Object.values(result).map(value => { 
      value.icon = icons[value.icon]
      return value
    }).sort((a,b) => a.order - b.order)
    return { sections }
  }
}

const thunks = {}
Object.keys(asyncFunctions).forEach(key => {
  thunks[key] = createAsyncThunk(
    'shop/'+key,asyncFunctions[key]
  )
})

export const shopThunks = thunks

const extraReducers = (builder) => {
  Object.keys(asyncFunctions).forEach(key => {
    builder.addCase(thunks[key].pending, (state) => {
      state.isPending = true
    })
    builder.addCase(thunks[key].fulfilled, (state, action) => {
      Object.assign(state,action.payload)
      state.isPending = false
      state.error = false
    })
    builder.addCase(thunks[key].rejected, (state, action) => {
      console.error('fetching rejcted',action.error.message)
      state.error = action.error.message
      state.isPending = false
    })
  })
}

const slice = createSlice({
  name:'shop',
  initialState: {
    collections: null,
    isPending: false,
    sections: [
      {
        title: 'All Occasions',
        imageUrl:
          'https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003850/arrangements/phaelenopsis-orchid-garden_seodpx.png',

        icon: faCloudSunRain,
					id: 1,
        linkUrl: 'shop/all-occasions',
      },
      {
        title: 'Bridal',
        imageUrl:
          'https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003850/arrangements/metropolitan-design_fashox.png',
        icon: faUserFriends,
					id: 2,
        linkUrl: 'shop/bridal',
      },
      {
        title: 'Holidays',
        imageUrl:
          'https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003850/arrangements/citys-tulips-design_nqwe7c.png',
        icon: faPlay,
					id: 3,
        linkUrl: 'shop/holidays',
      },
      {
        title: 'Well Wishes',
        imageUrl:
          'https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003846/arrangements/asymmetric-centerpiece-design_anphoq.png',
        size: 'large',
        icon: faMarker,
				id: 4,
        linkUrl: 'shop/well-wishes',
      },
      {
        title: 'Deals',
        imageUrl:
          'https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003850/arrangements/masculine-fathers-day_gnl5x6.png',
        size: 'large',
        icon: faChartLine,
				id: 5,
        linkUrl: 'shop/deals',
      },
    ]
  },
  reducers: {},
  extraReducers
})

export const shopReducer = slice.reducer
export const shopActions = slice.actions