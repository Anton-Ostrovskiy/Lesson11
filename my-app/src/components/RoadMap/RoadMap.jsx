import "./style.scss";
import s1 from "../../images/S1.svg";
const RoadMap = () => {
  return (
    <div className="roadmap">
      <div className="container-roadmap">
        <div className="roadmap__wrap">
          <h2 className="roadmap__title">Our Software Development Cycle</h2>
          <div className="roadmap__content">
            <div>
              <div className="circle">
                <img src={s1} alt="s1" />
              </div>
              <p style={{ color: "white" }}>Вася</p>
            </div>
            <div>
              <div className="circle">
                <img src={s1} alt="s1" />
              </div>
              <p style={{ color: "white" }}>Вася</p>
            </div>
            <div>
              <div className="circle">
                <img src={s1} alt="s1" />
              </div>
              <p style={{ color: "white" }}>Вася</p>
            </div>
            <div>
              <div className="circle">
                <img src={s1} alt="s1" />
              </div>
              <p style={{ color: "white" }}>Вася</p>
            </div>
            <div>
              <div className="circle">
                <img src={s1} alt="s1" />
              </div>
              <p style={{ color: "white" }}>Вася</p>
            </div>
            <svg
              className="line"
              width="1232"
              height="322"
              viewBox="0 0 1232 322"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_0_1)">
                <path
                  className="pulse-1"
                  d="M289.75 159.035C289.75 174.695 286.52 190.202 280.244 204.67C273.969 219.138 264.77 232.284 253.175 243.358C241.579 254.431 227.813 263.215 212.663 269.208C197.512 275.2 181.274 278.285 164.875 278.285C148.476 278.285 132.238 275.2 117.087 269.208C101.936 263.215 88.171 254.431 76.5752 243.358C64.9795 232.284 55.7807 219.138 49.5055 204.67C43.2302 190.202 40 174.695 40 159.035H64.975C64.975 171.563 67.5587 183.969 72.5792 195.543C77.5997 207.118 84.9587 217.634 94.2347 226.493C103.511 235.352 114.525 242.379 126.645 247.173C138.765 251.968 151.756 254.435 164.875 254.435C177.994 254.435 190.985 251.968 203.105 247.173C215.225 242.379 226.239 235.352 235.515 226.493C244.791 217.634 252.15 207.118 257.171 195.543C262.191 183.969 264.775 171.563 264.775 159.035H289.75Z"
                  fill="#0EB27F"
                />
              </g>
              <g filter="url(#filter1_d_0_1)">
                <path
                  className="pulse-2"
                  d="M741.25 153.785C741.25 169.445 738.003 184.952 731.688 199.42C725.372 213.888 716.117 227.034 704.455 238.108C692.792 249.181 678.94 257.965 663.7 263.958C648.46 269.95 632.125 273.035 615.625 273.035C599.128 273.035 582.792 269.95 567.551 263.958C552.309 257.965 538.46 249.181 526.795 238.108C515.129 227.034 505.876 213.888 499.562 199.42C493.25 184.952 490 169.445 490 153.785H515.125C515.125 166.313 517.725 178.719 522.775 190.293C527.826 201.868 535.229 212.384 544.561 221.243C553.893 230.102 564.972 237.129 577.165 241.923C589.358 246.718 602.427 249.185 615.625 249.185C628.825 249.185 641.89 246.718 654.085 241.923C666.28 237.129 677.357 230.102 686.688 221.243C696.025 212.384 703.428 201.868 708.475 190.293C713.523 178.719 716.125 166.313 716.125 153.785H741.25Z"
                  fill="#0A7F5A"
                />
              </g>
              <g filter="url(#filter2_d_0_1)">
                <path
                  className="pulse-3"
                  d="M1191.25 159.035C1191.25 174.695 1188.02 190.202 1181.75 204.67C1175.47 219.138 1166.27 232.284 1154.67 243.358C1143.08 254.431 1129.31 263.215 1114.16 269.208C1099.01 275.2 1082.78 278.285 1066.38 278.285C1049.97 278.285 1033.74 275.2 1018.59 269.208C1003.44 263.215 989.673 254.431 978.078 243.358C966.483 232.284 957.28 219.138 951.003 204.67C944.733 190.202 941.5 174.695 941.5 159.035H966.475C966.475 171.563 969.062 183.969 974.08 195.543C979.097 207.118 986.455 217.634 995.733 226.493C1005.01 235.352 1016.03 242.379 1028.15 247.173C1040.27 251.968 1053.26 254.435 1066.38 254.435C1079.49 254.435 1092.48 251.968 1104.6 247.173C1116.72 242.379 1127.74 235.352 1137.02 226.493C1146.29 217.634 1153.65 207.118 1158.67 195.543C1163.69 183.969 1166.27 171.563 1166.27 159.035H1191.25Z"
                  fill="#14FFB5"
                />
              </g>
              <g filter="url(#filter3_d_0_1)">
                <path
                  className="pulse-4"
                  d="M265.156 159.519C265.135 143.851 268.347 128.331 274.608 113.846C280.87 99.3604 290.057 86.1927 301.647 75.0949C313.237 63.9964 327.002 55.1847 342.156 49.1637C357.31 43.1419 373.557 40.0279 389.968 40.0002C406.38 39.9724 422.635 43.0302 437.804 49.0002C452.974 54.9694 466.763 63.7339 478.382 74.7927C490.001 85.8514 499.224 98.9877 505.524 113.451C511.823 127.915 515.077 143.424 515.098 159.091L490.103 159.134C490.087 146.6 487.484 134.193 482.444 122.622C477.405 111.051 470.026 100.542 460.731 91.6947C451.435 82.8484 440.405 75.8367 428.269 71.0607C416.133 66.2854 403.129 63.8389 390 63.8614C376.871 63.8832 363.874 66.3747 351.75 71.1919C339.627 76.0092 328.615 83.0584 319.343 91.9369C310.071 100.815 302.721 111.35 297.712 122.938C292.703 134.526 290.134 146.942 290.15 159.476L265.156 159.519Z"
                  fill="#61FFCD"
                />
              </g>
              <g filter="url(#filter4_d_0_1)">
                <path
                  className="pulse-5"
                  d="M716.164 159.732C716.149 144.064 719.359 128.544 725.622 114.06C731.877 99.5741 741.064 86.4063 752.659 75.3078C764.247 64.2093 778.009 55.3983 793.167 49.3766C808.324 43.3548 824.569 40.2416 840.979 40.2131C857.389 40.1853 873.642 43.2431 888.814 49.2131C903.987 55.1823 917.772 63.9468 929.389 75.0056C941.014 86.0643 950.232 99.2006 956.532 113.664C962.832 128.128 966.087 143.637 966.109 159.304L941.112 159.347C941.097 146.813 938.494 134.406 933.454 122.835C928.414 111.264 921.034 100.755 911.742 91.9083C902.449 83.0613 891.417 76.0496 879.282 71.2736C867.147 66.4983 854.142 64.0518 841.009 64.0743C827.884 64.0968 814.887 66.5876 802.759 71.4048C790.639 76.2221 779.629 83.2713 770.352 92.1498C761.082 101.028 753.732 111.563 748.722 123.151C743.712 134.739 741.147 147.155 741.162 159.689L716.164 159.732Z"
                  fill="#49BF9A"
                />
              </g>
              {/* <defs>
            <filter
              id="filter0_d_0_1"
              x="0"
              y="119.035"
              width="329.75"
              height="199.25"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="20" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.054902 0 0 0 0 0.698039 0 0 0 0 0.498039 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_0_1"
              x="450"
              y="113.785"
              width="331.25"
              height="199.25"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="20" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0392157 0 0 0 0 0.498039 0 0 0 0 0.149224 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_0_1"
              x="901.5"
              y="122.035"
              width="329.75"
              height="199.25"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="20" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0784314 0 0 0 0 1 0 0 0 0 0.709804 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_d_0_1"
              x="225.156"
              y="0"
              width="329.941"
              height="199.519"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="20" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.380392 0 0 0 0 1 0 0 0 0 0.803922 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
            <filter
              id="filter4_d_0_1"
              x="676.164"
              y="0.212891"
              width="329.945"
              height="199.519"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="20" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.286275 0 0 0 0 0.74902 0 0 0 0 0.603922 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
          </defs> */}
            </svg>
          </div>
        </div>
      </div>
    </div>

  );
};

export default RoadMap;
