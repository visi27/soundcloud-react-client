import SC from 'soundcloud'
import * as actionTypes from '../constants/actionTypes'
import { setTracks } from '../actions/track'

export function auth () {
  return function (dispatch) {
    SC.connect().then((session) => {
      dispatch(fetchMe(session))
      dispatch(fetchStream(session))
    })
  }
}

function setMe (user) {
  return {
    type: actionTypes.ME_SET,
    user
  }
}

function fetchMe (session) {
  return function (dispatch) {
    window.fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setMe(data))
      })
  }
}

function fetchStream (session) {
  return function (dispatch) {
    window.fetch(`//api.soundcloud.com/me/activities?limit=20&offset=0&oauth_token=${session.oauth_token}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setTracks(data.collection))
      })
  }
}
