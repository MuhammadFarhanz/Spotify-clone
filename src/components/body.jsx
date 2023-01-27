import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useCreateContext } from '../utils/provider'
import { reducerCases } from '../utils/constant'
import Home from './home'

const Body = () => {
  const [{ token, selectedPlaylistId, playlist}, dispatch ] = useCreateContext()

  // console.log(playlist)
  useEffect(() => {
      const getPlaylist = async () => {

        const { data } = await axios.get("https://api.spotify.com/v1/me/playlists",{
          headers:{
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
          }
        })
      
        const playlistInfo = {
          items: data.items
        }
        
        dispatch({type:reducerCases.SET_PLAYLISTS, playlistInfo})
      }
      getPlaylist()
  },[ token,dispatch,])
  // console.log(playlist)

  return (
    <div className='bg-[#222222] w-4/5'>
        <Home/>
    </div>
  )
}

export default Body