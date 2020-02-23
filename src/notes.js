import { addDays } from "./Note/Note";

export class NoteModel {
  /**
   * @param {number} id
   * @param {NoteCamera} camera
   * @param {NotePin} pin
   * @param {string} drawOver
   * @param {string} author
   * @param {Date} date
   * @param {string} comment
   * @param {NoteModel[]} thread
   */
  constructor(id, camera, pin, drawOver, author, date, comment, thread) {
    this.id = id;
    this.camera = camera;
    this.pin = pin;
    this.drawOver = drawOver;
    this.author = author;
    this.date = date;
    this.comment = comment;
    this.thread = thread || [];
  }

  id;
  camera;
  pin;
  drawOver;
  author;
  date;
  comment;
  thread;
}

export class NoteCamera {
  /**
   * @param {number[]} position 
   * @param {number[]} focus 
   */
  constructor(position, focus) {
    this.position = position;
    this.focus = focus;
  }

  position;
  focus;
}

export class NotePin {
  /**
   * @param {string} color 
   */
  constructor(color) {
    this.color = color;
  }

  color;
}

export default [
  new NoteModel(
    1,
    new NoteCamera(
      [3.6724893617668513, 0.10448181831762553, -0.10443959458119491],
      [0, 0, 0]
    ),
    new NotePin("#ff7a7a"),
    null,
    "Palvi Mehta",
    new Date().getTime(),
    "I dont like how the openings end before the bottom of the black canvas, what can we do about this?"
  ),
  new NoteModel(
    2,
    new NoteCamera(
      [-0.2391278466290959, 0.2413250726086689, 1.7599386342780603],
      [0, 0, 0]
    ),
    new NotePin("#ffe279"),
    null,
    "Ed Lazowska",
    addDays(new Date(), -1).getTime(),
    "I'm really proud of the lacing design here, do we think it will be too complicated?"
  ),
  new NoteModel(
    3,
    new NoteCamera(
      [1.2556252511652628, -1.8845128318655633, -0.006335531414734807],
      [1.2637327202535016, 0, -0.09982552431336995]
    ),
    new NotePin("#ffc37c"),
    "NrDeCIA9wLgBgHQGYCsSBMB2AbKjO91sAacAT1kQBYAOOATgEZs4k40rVHHMBfYiNHjIU2RujSjxksaQrCqmenDgFUNTJhrYJ-QZRE16mTiiMnU9OQcWYG9dEmzYq49Iyp6oBpxkXa-LVxHawVMDBp0KiosWgZmLyFEJ0wUdxS0xgyUUOpMLJM4KjM4RjTsPgFvYSQ7WtY6xtYc8ht82qoikrKiSv0akxckDSohkedchFH6UdFaGhQqejEaTyqk5C0mcK2eWqNJ0dSUTAlGZRokZfpEnxoeZ2GH3HuaQ4qUE7OLq+wb9buLCuNG0rHoIJYVHecxBi2WjEu6Dg2FuNRB6IxmKsrQUuEKxToPQq6FRyXoSGYjnJlKuFJa8moeM6BNK5VOpOQxlM5m5XMOKHoDicLjcBTW-WopTsMylDE6PH5gsczlc6HSJg5zM+qy6ZmZJBx1G6bJ4n1OKE1cBBFIul3OVtW-MJJuO5s13GwdCYzC93Ew-LEyI0cDVylULndFPYrijiyyjADjCDdlDKhw4uq1D2ux2Rj2BoZUykyZD6DD6c1SLVSirWAcIcTJdT4YzGxizDS7ewnfcFUbnpTZbTEYBCgkDgF46nAqQ-eDzYro+o6A0Jgcq6WK7ehqLgYHpfLI4lUwpOlpNOpLjng8PrZs6i5D4sAuvB+Hd4UtQw5y-7nJ4VfBcj0zKZ5WlMC5VKAsbDjcFFAiKIYj6EDolQtD0OiflXDg8IV0QrBNUUMskGiU5yVI2cd2KICkHUTQNE1FBShiYpmKiJisn5Gi6K0ZC20WVwBQEsp6AErih3DWizHoviYNOFxRPkpYvnpGDuOk3jGO0IwCU9GZpPEw8pNXBilymMQ0FWCzhlGMpoIUNIJLUDTTOPUZOHGDzBk4f0qMcoyeNclDu3uc4Qu4ZYzEM4djJkzVPWcBgEpYZYNGiyTAtksIynsfImMFPKoT81h7gqckjApMsLTMxReWfHkSP5ErmCUYZqSqzVNCRJQutUYxTiap4yrayrRM1e5aA8Cbpo8VSFFmFxYSWFYMCQcbODYWgNqKVZKMLaJu0WhZloRVbxvyJRaAumYNAVKiFvmOEVscTUmGowVZrLN69psA6YWO+FLler4FJB5STEOP6jqe07XoWVIlnhuFtEh2JfSBdgSOq48OJY3H2NZVGTHR1hMeKDkmKQ1AiiwanOCJuImAxjhsZApj8jVdm3HZ9AGZJtgWYp7hflKLJllFor9qQxnmFJwWzJQDwCaV1ilb5+JmaxoXwNlGUeATe6rV+GZDsetaFfOGY2EtzgGyokbxH6+xHCyxBHJrUsPerQ4HbLTRndqCmsGRT5g+7NJ8h9irHf9pVA4VilaOUROrlYDwo-ap249dhAOAROgSPz1gYgz0bY6FHO0Caeoa8j+3o796UK4pmMkzjWMY1LmOm5dlvBNE6IRIE3n68z8ve4VrbaJ27atq7xuA8rxW8PYcRIlXn7PwbrPm4V9u29b6MDf232d4nnHRHBFRL7odg-nns-44v8EhwFSJlDfh-x6ftmdAqOg-5aGREQH2N4Yp0RRArZwok7J-EVqIe+9swEZWkpAnGHMJCqG5lgze1B6jqQ0GgtmhQSGdFIcfe8yDnKEIpj1U4fVepKG3CfKhuAIEUx1MUPUupHRILfCgmhCtrT2mEbaXBJ5WGxSIRsScsiJzyJAXwghOAKapUSmolKnpQH8OoSohWBUcoGPysYbRyjpEGBYBIEUIY5hJgkKYpybDUEchYPvI+HcHEBWcWZFgkQdBJj8e4K0I8WE6KcYI48YhuDRJiTEkJlCwlSJcWUGy1krJlElgksxyTIi0RWI4JwCJ4mfkkewnxQTAkBKIO4ChJTEllMiRIVAYgmlSAkJkup2TynLDLDoHp-TfKhK6ZEpOadRkp2xEMxxSSfFPBwC8Z4wxil4NKd4yJeM2KqxYp48BayQIuGJE4I4yojg7IEXo9ZM1JrXPuGc3R5jhDdlyoY4whi7nhIufs0Odhw5h0+OIny9S9kbHCmFMwEVwrvJmZEzR2hYXqKhQ0-Z3Yoi9h7B2AF+DplIpBZ6eIPp8WelqSsoFETkUwIQRS6Bc0SXDP2acI5hyDkMsRcCixqR0gfE5akTFqyyUgqAYAgBvRblKOxWyx5uTClSvyby0lnyQWXBwEGWoLBPTDFZfyixcKko6o0ZqhVFixEiLtBcA1DzEB-EcOGIUNqQhiq8Vqx5VK4GwNEssk829v45z+KCyKoVIqQyNtcB6sJzaRMFLbG21tBQ0tAsGv4oaFjhpAnYK0iw03HUzUGy4IbTZho5IOL2dYqwAs6LmxN+bk2FtXivZe680g5uNkmtANbfk-O+SHJteb-qtrMjrHgkFB0zHVkzOWWt+1VP8cE6dzDfpow1uO8mk7OZYNXRg0dssBYTuPBgrm663Cbs1su3dWQuVno5QUSGLaTpA0ncYvKzzFbXqrTDO9p7Lq3U-fkOd80b2AxTRsfI-5vwgb-B06gW1cKRGiGjRghbur9UQ71X9kHVjQfwsTeD-bkP0LoUiVDoF0MIVg1hhDaoKOUao4NUqrVt6syA5gvda6zg0ZauVTODGDCnGLbxyZalxUmRzmREiRFyJiYg0WbCxG8KkcLWwHAtrFPWsGTBaT8FZNIXk3+X8P5cIeuKHuecjiPyIFwnp0Dv4DPFn3EBUzCBwjSoKbKpwTpWS9FNCpeTlNaY+fCM+vyccVSig6N5mm-nwtcEVEKYLaoxTyeZScplknbKImREmWzgHuOMoZYlo57wOhdGdL0Ek-b9jbHK9mfjuJCssiJOyMrl4qSnipCl19t6MDIkLV2dFKKYgGfawBpEFqHM9dRR2VFA3XTfATf8XddUFuuaopW3tt77P1UfGYR89lGQm1W4DdbWzlZ42JVMdo+JjS9G6-jI7xRTuKDFEV9zFRutjG8sMbyhwMOkZliNkwQRAgBCiEoL7JHpbo26+uTQm4Nzki+4rH4PbuyFv3Ux7Bqmwg92FKqdw63Uf49UF9rHsXcco+5ZkDI7gvuOvojoLjwhL2U4vZkQ4-MyZcB4Cj5p0hudNJ21MNnHAOfCZkDztpaB+e0E0wusdWWGei9aS0iXrPpfE0XXLszCutdLf2jJmD4OGBc-F7z5XVE9eYcZkbpXJudc2DhTjx7BIrdi+t5L+3IWLs0Gd4rnnbuAbPXS8iEXiMTjI1D0sVn-vTrDYy8H8E4f48I2q9QZQdWXSiBR9YqxrgbFXioqny7FRTR-ZOJcRQpeSKpC0IcGLIo4u1fp5rhRcjxwAtrw7hvKPm-d7bwb2XmMS-d+nHD-Pfet0D678P4fbfBckS4HjofciZ-q-Z4rBfU+l+TEbw5lvu+R+Fm38q9VR+lVqq36URHK2FKFrVaflVR-z8iObabObqbZ3VKnVTncTEhp0bHjfipD-GdL-A-ZqYaL1AAz-KA8-FSJ-ENYTd-RAkAgwdmD5IIccP7JA6A7-c5dAgUTAwArA8-Aec4c3aISA4A7A0AkgnCMHCgypSgrfbgViX-DjDXBzLAxg7-Zgn-WjNg+goAypJg2KPAgeUrXdTgoQ7gkQ7QccRYcQt-QgpQ07eBDzabBHbDCQ5Qrgg-fWdQkRdbSQj-Jgi6M0GbVYAQog7gy-PbI6Sw5QpgmwpNewqglApEILOvdUFwnQtwgOEnAobwqQg-ZRTSftIw-xLfEIoKIDcI5A4QTsWfUwG-e-W-VVZESIovfQi4QwlI3I-nNIWQoSdTXCSfPfVvSIwomgmTUoxfffFA7dUwHgkqBQoDCvcvLQSvUvLfBojnFgyIFHDo9osvKvQjNAC3fmTQ1NWxXPHPbPbo8Y9XSY1okPJPJGCPb-OfRWWaMApQFHFYsPJPbounKojTL3ftCnc9JnLfToXA2QkvFjAnDHN2G43RdAv7GHaHKHNccRWCMgpCQ-dyD7QEzya40+ceQ7G7SElQtPNQsw7rNFcbPrNUa47+EnFo7jMhTE1QLEp43OVQzIswhHeTHMSrHYZPPE+rTzc0c4BLY5HLE5LfIXLYvon0MLKmPzKLb-JkpooaM43dSzczMDD1T4bk7YoaeTO1BTK1BTRk6kpw5wBDPjWsEHLkuU2bUYP7IgcGLUxSIgONT4fvUUw-JLXLOk3EmzYzIyQtCzHTQUyTUQBeDw1Ua079HgG6H9LfaGDrYbdEhnF5R9IxFQr0obYBa0g9cM4U4MgPHQGtPWAdcCT0x6b00M-tBhPDJDK0RMpaEMmM1M9tEOCOLtb-KM6PFM3dBoCs2uBoLMqPNLXM8s9NRQFQLNZsmst9Tres-ZSNGNK2C-USNs5MzskFf1CFcFMFAcnM30y1MDG0vTCc6MqchAPSXSHSMwPSfUksusxcz0AuVwEEYufOec0soc7VdRZKXVCYYs8AsefIFxBYBERWe8p8xtK8v-MuW8nxGVIpPJb8z06898pY7VQlX0AlckhBN87uQCx5QVEVYBf+IM-8yClxeZOZR4e4eZP8iCxuKCy1XMCrEk0Y2zcVV-AVE0sin4oirxEi9lIdeMhgT0y03Zaix5V1SleBalBi1ZZiy1PFb0Xij0UVA-SipilxJEibHrCixilBbipchZFC9CtCzioFGSs8vVc8sC4S6SlxMckcsFQSlAzS5yFStit1di80wypxYy1JFJdJNAMCn5DLKSn1B9f0t5b-BypsJyFxOkvLZlLfDywy7yoEt7QE+ywPQKnxWY6Y7Pbgfy8KpylxVCuStC4UgKhK2ZMYggTK3ARYOKozKhRK4HIHfwYIfUtKgq2ZA+eMdxWK9y+KiqxpBtNeJEetVK+qnRFxH3Lq3Kuq-Kjq8pNHCMsq9qhcTqqAyglQ8q-qyJb8pzH8yIfy8w5-DPHxGy2ySyda+0tUitWw5JEWYWcWZgxahHdUw6ZJWJC67gVKpapHFxC8+FFKc07a5akbVIk-NIrRdym6q-O6txP6ra763anxUWfasWFgcQY6uAn6-Rd+dgF+D+cEH45626-RdStG0Y5G6GnGWoqcfIzGoGnGBqLbDbDGwGhaDhZctc1c7SSG+UlawmwQxmvGsms6hWfDNMxDUmk6na8mtm6UyUm1Wm06+m4hHEsWyalmkWmRZjGWziL67ml6imY-N62-AGhWlGnGLPaK2xIWnm1mzWl3Q2pGyWkbbULUbhLhXhA-fG3mi+EU+2h20QXWxWveZq2tJq429WrGtmS282zhJ2+WqGgmn23zSLPzZ2jWtmYEUEaOoEQUCO72mRQufc5O3c66r24OpOrIVOCZNONWoO22tmP5Qs9tCWjOwumRRE3rHsBOzOtw5ncnXHWuiulA4dCCOMsugu-WtmFWSEtiZu7umRA68GsGiWAeqWlAp9J9Tuum02h4+egaQO2eimMO1e+mJe4Wue3uzZDiMqk216AM15Fy-O5emqL4j4tcMscekbeYOOiEMECEa+9aaeKeTaXaJ+mqK5L+2aD+tyRhDM-DX+lCEYzowY1ILmruiesIYiUiGBiTIBtsTNDNZs5Bmeze+KNSzBp6-emqZLPBxe62nBtyP1EhqKDevWqBxkLyYE97bB8uwemwNJda6ygOwh+hyh8yEGw60etBihm+qm-SbSQRuhyB-hpSXU0Gc0BBtTfuYSIok+9Bmqdi1i6lZgaRhyHezRuWth0RwiL9d0t0q6T23RmqMTUTETCidRyDDCGxhRvhwiHsqNbsqx0CIeQeeRtR8hl2tydu3xqCFxnyAUoJgJp8RbF8LxyOtsF+3aN+7aPe9hm+lrc8M8S8Ox7xlCRxzJu2HR0+tyUO9kyLYx3JlCDfHvAJ47Cp4oIpxRvJqUpTaU3h9JtsZU+sasVpgJouVOg8kEDpjxvp5YDp96N6NID6QzDpjuaq-eDpmYuxaKrakarymqB0G0ZZk1eZvq0apZ0hbEnZiGXqxyhqlCOG2Gt+IcfIiyqSGSzoXOm5hCrC-qHCqYFQFcJYZ51YMMLATCtgpCsyWOh+mO8ENKV8757CjkK4DbCF+0zcjsxc0GuFgZ4sx09vcQMFprZJ5rMoT0g5xJVFsZHO7O5OLFzyq035zEMl9EDS7FmiMFzyYK6h+0gUcfI0mlu+gF++hlm2hU0l5h2y1JDllmkbJKoV14Rk0UlkwV3czpvcguUVzYnk0qMFkkpVg4LkuVsU0qPkkCWoS+2HFcaHc0sV3g1k3597Wl8YfI-E0w2AmS3TGcsDa4nMg5xVwx-Rq6BEFE4nTw2F66N1100Y2wPwr1sFymoRlc-s7-GEgkr4YN6mkN9c64wvK1hrY8YUe6+66EsEnuezeknNlwc0jyG852bN4IEqwHYIH44osHLAbfOa2tlaa40g04zDGt1l1toobovgzNsF4msJsC1grt35hPNYxPfIpwOQytlcbt63Y3KQI48dxt6DbtpsxspBxQboxo9V9jbt-AHKndwgUdhY2XR5rgZ8h8s9lGDYw9rdY9jk299tjY1feV2F15kMd5t59Yg-Ho5k3g59kBoYyvfIlcY434jTMF-98DnADIpN8w7NnluDiySI37JdVAMDphtDzF7-KInOcxuBix2qSIwNjvbD2B8TPDvZ3Q2e+YMDqVmjsCvQwkgw6jlO6Vg8uj9Pa149v2rjooH47OlyYDmIMDnhbj9e3Qzd-8sF-F8ZAl1gJg8Tt8yT5OGTm54gkD77bNqTzTwlnAk49TxTvFpT8Zc-V4yowVrTgz2TnAkz44szwz8zn49gG27D+z5T8-ftiA35lzoznA9z--TzuzgLyz0A0RpYfT257z4Lyjm1rznOrfML5T1z7-eL6TiLmwK+Q0uVjTwLlT-PRI+fZL+zmvaMqloT324TnjmvMfTWQVkTs2ir0fGXJlpwJjyV5j84Srxr6rsD6J2eGJjrtXDLmrsxkj8xlLGYTr8dIbsj3Dsbqryb1Dta9DuNTcbHD3LUBbjapbmvZUTwx3GtiDtoyD-PHboj9b35g7sByXZF+vC7MDj5t919j9tLk7tbroO799+7p7hQa79UM7lNu9gpsbl7m7v7rVx88H89x8q74H37t7wdyHhHi9-aH7vb7drAXd9H-d7b1bkHuH-7vd7KrH47nH2Hk9MH5dlsldmvJ7Sk1IQV5BldlBtd-PGn9PeninhnrNanyN0w9n1d-nyPdsmPIPJd-npn3E2gfwhvTVjYVADn+XiX93XHp3QdhX8X1nJtn7L0UX8X9Xs3TXvvHXxnqns3VXJD9guXsXk33XM3-mI3ynrns3FfUUvgAAXVd6AA",
    "Kabir Shahani",
    addDays(new Date(), -2).getTime(),
    "I love the differnent fonts, but make the nike and zoom closer together in size"
  )
];
