import { addDays } from "./CommentsColumn/Comment/TopRow/TopRow";

export default [
  {
    id: 1,
    author: "Steve Singh",
    profilePicture:
      "https://media-exp1.licdn.com/dms/image/C5103AQES2HWYu834NA/profile-displayphoto-shrink_800_800/0?e=1588809600&v=beta&t=crKDuzgclc_52hqw_qvzN5O-vvGJUYWLxiCXwvPUa60",
    date: new Date().getTime(),
    text:
      "I think the outsole of the shoes is a bit too thick. Should we make it 1/4 inch smaller?",
    drawOver:
      "NrDeCIA9wLgBgHQA45IMwDYCcBWAjGnAExZylYA04AnrIgCz05ZFIDsLccbZGS9AXwoRo8BGyQ40aHEQxo8srtiq0xjLGyY5JpYnIxCRdceizscOekRxs8rPKpNM4aJHgwc3WBSRxGoEwlXH3kMJkU2NiIndXw4PAkFPDwUWSIA0UQozyxzLlJMeh9YhnS9NnkZdgk2TKC2NCI4HXQyFHMcUoQmEjkiVjhwjESCerEovHpULAwpInoCJm7elgwBlGHRtHHsvjsZejYpejQomJpnKzxzI6akBes64UCJjGwPK2PiDgSVq3Q9HWOASKQeu3EcxwfHQSAw3CwKS6lzi9EBwNBqQyLyykLOdk46DQWCOyLUZS+3EqjTyRHshhxQRGmhBrhaeXQGH+IyG7H0FXCEMqCWCbNYxM83K0hDpuCiQKwQtaMpJBBkqSlp2IN1sWmwSrm-A8WhQQKQSH+jQ4iUwcLR6yVJFIC1mWkRHH+KEUcjsx1sNiVxBJ6FSkg8cHonrmU1SpFOKSiQrREbhA00jHNaCj+EWSDjyUTjImTBQLvkdNOiP+LAsPCqLTwriTjC+7Gsc3hWZRZRrxzr0gbTaL2XbuvYxOKjTJV1pmHC9jpZ0Ew-E0zhqGw60bZGn6nhlnMikkqGpQuJ+AU8OiI0IFu7PX3zHcOhB7E8Z9I8lwqSOEcsKxGHVXVsWZFFwM9r2wfBnxLLl7yBFJcGAjgRmYfwVynX9XGmRZiiOADUiaIZG32Ygdgwpp5RGYEbWiAj0GaHlSKIcjjAmBQ3xSdYZBJNx6KIpi+RYoVWEaKY82hOwEguckHwWPg6SIDgtEWSwRMsOFUzzB4XwA+SHnsZTGEUdC2OyBYWMRKwuGkDg71koF9MUozVNM15zJuFgSRBFgeEqPSzWc9NXKFG4SGOJSVRBLsHPWQLDOCkzQu+IYd1Ycx5AAhQIyKWQRhQJBQtQkhlDQRZuF3Bh5EbU5wjy1JUAhPh8EsZh91jLQAJJDs0UkYp8uXMyEHeAYWwzbxmBi5xjhuVAJW66E3NxdZJGg0b3jyRIVmfWQsTkQh8whNDb1vdNGxYFZETIRYNqQ8SlpMaEoWiNViFsFJulfORNHPKYOUKlcAR0KIhnmSt7MeyKpB4bShiOZ4hqkPkmBkbxmkwT7KS0RJQL8Vj3IQKRpAIbB8lmc0IbEHRo2mKYmlUxEjtyhjwgkKQpm6TsWjK9UpmigHEZLFhWDbOQHkje98twTw4siLcjs8ZRrDpdwes5pc-y9PK7AFgnmEYdoZh0BRbE5kFDLkWQJIlJqWJ5HVKg7Okzd2+QI2mCMSUVFcaZWxpci8tgzZyVApAqjhGZ9xpSWsNEQa0GSTHeSJKgVPgvKa7yJON8M0SmsQRv4cwWFSTwrAeiYLOJRQPds8xOfnAYCC0TWEiVHms8sWvHEl1mdHStUFHAjCzAsKwbDsBwG7K9dKxrnxddxdwuFOFjFzzVBKcQOZZmwGwuAGIoISNHxCk8TBERsM2CDyeIQX92Rj74RgPdsLuEgl2Swkqfg4XeaorDH1CKCTk69JCc1QFMGw9Noz2DwBCUgthCDQkwBFWYlB7z92IryHgaY24riugMEg7h+rznzogSwb1GDRGkCSfaCCkR1kKFZTyn0hh5DdNYTQNpsRDWdCTaI7hIoqHgoXVkG0WgHGPgnfgLRtQe0UCsM4-IuCVGkMDBkQ1JDVUcrYD+JR4K+E0DwWc7xFjH0IDDRQG12CaDgg5IxINTHziFJwRoKBKhyFrisI4zRGxnFGsLCu2Rf7rnHtEEu9iriLFuI0VgjwlICAALpJKAA",
    camera: {
      position: [4.097174371429141, -0.12701280783257413, -0.4438805208056621],
      focus: [0, 0, 0]
    },
    activeVariationIds: { 1: true },
    thread: []
  },
  {
    id: 2,
    author: "Ed Lazowska",
    profilePicture:
      "https://s3-us-west-2.amazonaws.com/www-cse-public/images/portraits/lazowska_sm.jpg",
    date: addDays(new Date(), -1).getTime(),
    text:
      "Do you think the lining should be a different color? Should we try another material? Maybe more velvet-looking fabrics.",
    camera: {
      position: [
        -0.01780035071461352,
        1.7964346779471398,
        0.012150211120563803
      ],
      focus: [-0.07562892676508104, 0, -2.054163283050633]
    },
    activeVariationIds: { 1: true, 2: true, 3: true, 4: true },
    thread: []
  },
  {
    id: 3,
    author: "Dan Levitan",
    profilePicture:
      "https://dukeangelnetwork.duke.edu/wp-content/uploads/2015/05/Dan-Levitan-Headshot.jpg",
    date: addDays(new Date(), -2).getTime(),
    text:
      "If I remember correctly, the merchandise team wants to get rid of the heel collar pull tab, right? But I’m pretty open to it. What do you think?",
    drawOver:
      "NrDeCIA9wLgBgHQFYDsBOJAOJcCM-cAWANiQBpwBPWRAZjiTXWONt3VwCY4MBfMiNHjIscTrhaZmjOJgrVhbdnELZCeTJlxJi-QTREoutTklxxamQt07yDbTrULmGKQiiRJVugVAOfVFBQVcU4g1TtFXFpiaNMeUksGPT9hT3pMPE5CWiRaFCtcSLoibLR1TmJy-DRMFKFET3YTZy8sNAZCYoQ2T3FidzQawjyUev9CNDRc1usUNmxutmJ0S2muJmC0H300yYsqphYhiKp7dhy4FVUsMwtxvZRiTDROTXDK6aXcKTFODrgT1ouTQD0aIxenDeUmsz2yS24sTgz2CUIBbjByEII2xqFq7ky+QRP0w-w6qgs6DCmK8MRIEm4L1YbARvSQjh0tW4kxpc3cLG480wtCYCJwrFYlWxT1qvJ4ODc1imUiwCKqKBsGCGwPcNJFxAsFi8KimRgRmkysNGLwwO1SjRF2ny2MqpM0aARGAkqFJLFYmj1pPSlTu+GFSzY1kmHnEJkphD1AywJgGBTyRAjnw13LYYmmCd8DWQuU8U1kGoORTOimB23KpAGmi85T1+WI-1kzykbgjRhwEgN7JeVj1bwG+2myKNEasUOcXGCGoLuwd2gkBW4uSXcmrdHUwNksnEGvdevMK32NrwLCW6m2VUY9bEWjtRaHpOiA2yjAvt+c-LEfAVB+FYaTefJBVzV5GFsXcemlYUPEsR08WXe1kEqLhGBIEZ2yrBQ90wA1OiCEw3iCMD3A3fIdGiBwljMIgcEsddpheSiTBeHDsnbWgGPYLQflqe8CnYMDTDjMdxUYfD7FpUwhVQXAuVyMDnywZT5mVFAGOqKinlJaYKMLfxlOFFhzCIng8B0uCYmRX40SuIE0LfdgZHUZScDRcg7JYZwoWiNwVCwGl2CIGp6CMIgciWZ44yRFE-lBEy0m0VZVGcJ4Q2IJY+zwJQeHPVgwtUcp8QkFQNVkxQ3GeLyTACHRhTCmYNRjUhGCcPKrFqNwjBuIjX1M9yjTcIZ23KJZDLMKowmCEYdCQMKVDERsfw8WRptiEwdXzKxYhpTtXAyKECmeab1n+IIeFeGJhrSZEQXZZSuHwEglgwCwX1WF42FoI7+x+aIbMcXK7K5El4qVfqjrCBtgORHRLG6dQITwdkVnc1AAdSxo8Cyl4XokRY4LvCx6C5aZ21UI7nI0VgSae1GuFjYL0adTFJm2bhNhyIJxBqxB-1ZoK0dEbQuaYZ0DPZBaXlR7lhUGaWCeSPGEEmVNWAVLsCncRX6DeZ9GwWRwpYNMIGG2ExlFMRXLjEIULJyFqNcmTwgmwQE8lkaNFeebFSVMf9afd+tVgVCChl8gjNfoMQvFTBhhWwKWSEjwFo+0VGHE2W6wYGXApfyTJpmuoZxEBXPLGsUxsGE+KpehbITBtkwPFsuP+eS5zmSwJ4pbMkU2-cPJnFR-8PAOyx2TCOpw8spozD+iVJ-ZV4Bid4VUAe4WOh+YI13mVBr0noYeByLKiCkVT3Y-PufhCJgMFR5XBypBJ0i59A1D6Vf67dDMB0YUdYSA6FUAvFcmtU5HHQD6TCpM44BEBFwAUjVaJSzMGOZwt8phMC6HBLAJAGCxHmEEbCnAwog3ekRLC2I+JEIwM4fE8w3jZByHqawb1lQh2DkApk9YIFNi1jSdsyJBheC0FCC6RCWC-SupsYuGt2hDH6rWEY5RCHIOBPlMwzZZASExEiOi54tBBA8EA64G9cLiCIilaB7Ywj4AfJtAy4Nu4VnMJpX2IZtjGNtrhCWkwvLr3+FKbeW494IAlP6H25lKgihZk4KyOQY6TEsAElgSRp4xESR6Oys5HBGVqG6LCxi3jmAknRZ8uRbxWRImw8iYwNaDlehSfA8xFrfEcM4K4qAx5SOiaIVQuQCD0AYbHewVwXjImyA5b0wz-RkIwNgrQKM7LW2YIzDgvNloqOIVsR8wIyTfBiHEHA2w8iZGWgAXVuUAA",
    camera: {
      position: [2.5618038056469907, 2.450867014776206, -1.6792127301384934],
      focus: [-0.5957711016470664, 0, -1.5276489458495608]
    },
    activeVariationIds: { 2: true },
    thread: []
  }
];
