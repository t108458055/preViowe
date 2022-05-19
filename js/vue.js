new Vue({
        el: '#app',
        vuetify: new Vuetify(),
        data: () => ({
            rating: 0,
        }),
    }),
    new Vue({
        el: '#app1',
        vuetify: new Vuetify(),
        data() {
            return {
                tab: null,
                rating: 0,
                email: 't108458055@gmail.com',
                aboutme: '兩年機電專案現場工程經驗，機電包商監造管理，並做保持專案順利進行。嘗試跨域之軟體工程師之路。',
                items: [{
                        tab: '學歷',
                        content: `
                        
                        `
                    }, {
                        tab: '學位',
                        content: ` 


                        
                        
                        <div class="accordion"id="accordionMom-degree" >
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="heading-1MasterG">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1MasterG" aria-expanded="true" aria-controls="collapse-1MasterG">
                            台北科大 Taipei University of Technology
                            </button>
                          </h2>
                          <div id="collapse-1MasterG" class="accordion-collapse collapse show" aria-labelledby="heading-1MasterG" data-bs-parent="#accordionMom-degree">
                            <div class="accordion-body">
                            <h5>能源與冷凍空調系所 Sep.2019-Oct.2021</h5>

                            <p>專修化學濾網應用範圍與環境之汙染產生源之原理，無塵室內所產生物染源防範規劃，並降低汙染源之影響控制。化學濾網實驗設施架設，冰水機與空調箱穩定性試車用於實驗化學濾網使用。</p>
                            
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="heading-2BachelorG">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2BachelorG" aria-expanded="false" aria-controls="collapse-2BachelorG">
                            勤益科大 Chun-Yi University of Technology
                            </button>
                          </h2>
                          <div id="collapse-2BachelorG" class="accordion-collapse collapse" aria-labelledby="heading-2BachelorG" data-bs-parent="#accordionMom-degree">
                            <div class="accordion-body">
                            
                        <h5>冷凍空調與能源系 Sep.2010-July.2014</h5>

                        <p>探索自我並保持專業領域進修，如流體力學、熱力學、空氣線圖、莫立耳線圖之冷凍空調核心領域學習。四技期間，參與各類社團活動，如系學會，與團體共同協作舉辦活動，並做交流相互處人與處事認知。</p>    

                            </div>
                          </div>
                        </div>
                        
                      </div>



                        `
                    }, {
                        tab: '經歷',
                        content: `
                        <h4>空調機械工程師  May.2016-Oct.2018</h4>
                        <h5> </h5>
                        <h5> </h5>

                        <div class="accordion"id="accordionMom-1WorkQ" >

                        <div class="accordion-item">
                          <h2 class="accordion-header" id="heading-2WorkQ">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2WorkQ" aria-expanded="true" aria-controls="collapse-2WorkQ">
                            A.	公共工程生技園區 - 潔淨室內裝工程 (Aug.2018~May.2019)
                            </button>
                          </h2>
                          <div id="collapse-2WorkQ" class="accordion-collapse collapse show" aria-labelledby="heading-2WorkQ" data-bs-parent="#accordionMom-1WorkQ">
                            <div class="accordion-body">

                            <p>配合輪調至替補至此專案，負責整廠之部分無塵室隔間工程施作，與土木工程並行施作，對於隔間之材料安置，較零碎的施作範圍與文件製作都是需要花更多心力去完成。</p> 

                            </div>
                          </div>
                        </div>

                        <div class="accordion-item">
                        <h2 class="accordion-header" id="heading-1WorkQ">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1WorkQ" aria-expanded="false" aria-controls="collapse-1WorkQ">
                          B.	記憶體廠擴建工程 - 潔淨室內裝工程 (May.2016 ~ Oct.2018)
                          </button>
                        </h2>
                        <div id="collapse-1WorkQ" class="accordion-collapse collapse" aria-labelledby="heading-1WorkQ" data-bs-parent="#accordionMom-1WorkQ">
                          <div class="accordion-body">

                          <p>負責現場所產生之狀況排除，及點料發包標單製作協助，並帶領各類工班進場，及目前現場敘述及安全規範作告知，吊裝負責現場立即排程，當前各包商進料需求，分配處理，並確保所負責擔當之各包工班能順利的進行施作。</p>

                          </div>
                        </div>
                      </div>

                      </div>


                        `

                    }, {
                        tab: '技能',
                        content: `  <p><h5>1 辦公Excel, Word, PowerPoint, Doc, sheet, slide</h5>
                        主要使用EXCEL製作報表與統計計算各類資料，並且轉換成圖表應用至簡報與文件應用，如論文期間詳細記錄實驗數據收集，且作為論文描述。</p>
                        <p><h5>2.	繪圖 AutoCad</h5>
                        主要應用在工作期間，專案工程後端修改工程圖面，並製作竣工圖，與主要繪圖設計溝通協調，並彙整報告至負責單位主管確認之作業處理。</p>
                        <p><h5>3.程式開發VS( ASP.NET MVC Core 5), VSC(HTML)</h5>
                        進修C#全端養成班期間，所學習Web架設前端與後端連接溝通，並將課程所學實作至專題的網站架設，負責收集加密與解密編碼與登入登出資料，並套用至班級專題中。</p>
                        `
                    },
                    /** {
                        tab: '',
                        content: ` 

                        <div class="accordion"id="accordionMom-1" >
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="heading1">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                              EMAIL
                            </button>
                          </h2>
                          <div id="collapse-1" class="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#accordionMom-1">
                            <div class="accordion-body">
                            <p><strong>電子信箱:</strong>t108458055@gmail.com</p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="heading-2">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                              Phone
                            </button>
                          </h2>
                          <div id="collapse-2" class="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordionMom-1">
                            <div class="accordion-body">
                              <strong>This isn't support.</strong> It is hidden by default.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="heading-3">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                              GitHub
                            </button>
                          </h2>
                          <div id="collapse-3" class="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#accordionMom-1">
                            <div class="accordion-body">
                            <p></p>
                            </div>
                          </div>
                        </div>
                      </div>



                        
                    },*/


                ],
                name: 'Xiao n0',

            }
        },
    })


//this is Grow template ref:https://vuetifyjs.com/en/components/tabs/#center-active