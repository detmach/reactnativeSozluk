import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { Component } from 'react'
import uuid from 'react-native-uuid'
const MAX_LIST_LENGTH = 10
const SearchHistoryKey = '_SearchHistoryKey'
const AtasozKey = '_AtasozKey'
const KaristirmaKey = '_KaristirmaKey'
const KelimeKey = '_KelimeKey'
const KuralKey = '_KuralKey'
const SyydKey = '_SyydKey'
const YabanciKey = '_YabanciKey'

export class ApiServices extends Component {
  // static MAX_LIST_LENGTH = 10
  // static SearchHistoryKey = '_SearchHistoryKey'
  static getInstance() {
    return new ApiServices()
  }

  async HistoryUpdateList(history) {
    let list = await AsyncStorage.getItem(SearchHistoryKey)

    if (list === null) {
      list = []
    } else {
      list = JSON.parse(list)
    }
    let sira = list == null ? 1 : list.length + 1
    let newItem = {
      Id: uuid.v4(),
      Name: history,
      Sira: sira
    }
    const existingIndex = list.findIndex((item) => item.Name === newItem.Name)
    if (existingIndex !== -1) {
      list.splice(existingIndex, 1)
    }

    list.unshift(newItem)
    if (list.length > MAX_LIST_LENGTH) {
      list.pop()
    }

    await AsyncStorage.setItem(SearchHistoryKey, JSON.stringify(list))
  }
  async HistoryGetList() {
    let list = await AsyncStorage.getItem(SearchHistoryKey)
    if (list === null) {
      return []
    } else {
      list = JSON.parse(list)
      list.sort((a, b) => b.Sira - a.Sira) // sondan sıralama
      return list
    }
  }
  async AllData() {
    try {
      const response = await axios.get('https://sozluk.gov.tr/icerik')
      await AsyncStorage.setItem(
        AtasozKey,
        JSON.stringify(response.data.atasoz)
      )
      await AsyncStorage.setItem(
        KelimeKey,
        JSON.stringify(response.data.kelime)
      )
    } catch (error) {
      console.log(error)
    }
  }
  async AtaSozuGetir() {
    let list = await AsyncStorage.getItem(AtasozKey)
    if (list === null) {
      return []
    } else {
      list = JSON.parse(list)
      return list
    }
  }
  async KelimeGetir() {
    let list = await AsyncStorage.getItem(KelimeKey)
    if (list === null) {
      return []
    } else {
      list = JSON.parse(list)
      return list
    }
  }
  async Ara(keyword) {
    const response = await axios.get(`https://sozluk.gov.tr/gts?ara=${keyword}`)
    const response2 = await axios.get(
      `https://sozluk.gov.tr/yazim?ara=${keyword}`
    )
    const data = {
      detay: response.data[0],
      diger: response2.data[0]
    }
    return data
  }
}
export default ApiServices
