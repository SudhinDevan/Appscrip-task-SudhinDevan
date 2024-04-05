import HorizontalLine from "./HorizontalLine";

const MiniFooter = () => {
  return (
    <>
      <div className="bg-black text-white pb-5 pt-3">
        <div className="p-3">
          <h1 className="font-semibold">BE THE FIRST TO KNOW</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            voluptas in itaque.
          </h2>
          <div className="flex pt-3">
            <input
              type="text"
              className="w-52 h-10 rounded-none placeholder:p-2"
              placeholder="Enter your e-mail..."
            />
            <button className="text-gray-500 w-32 ml-5 border border-gray-500 rounded-md">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="px-3">
          <HorizontalLine />
        </div>
        <div className="p-3">
          <h1 className="font-semibold">CALL US</h1>
          <div className="flex mt-3 text-sm">
            <h1>+44 221 133 5360</h1>
            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-2 mx-3"
            >
              <path
                d="M3 0L4.48492 1.51508L6 3L4.48492 4.48492L3 6L1.51508 4.48492L0 3L1.51508 1.51508L3 0Z"
                fill="white"
              />
            </svg>
            <h1>customercare@mettamuse.com</h1>
          </div>
          <div className="mt-3">
            <HorizontalLine />
          </div>
          <div className="mt-3">
            <h1 className="font-semibold">CURRENCY</h1>
            <div className="mt-3">
              <svg
                width="62"
                height="20"
                viewBox="0 0 62 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_653_3385)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0H38.0004V1.53848H0V0ZM0 3.07695H38.0004V4.61543H0V3.07695ZM0 6.15391H38.0004V7.69238H0V6.15391ZM0 9.23086H38.0004V10.7693H0V9.23086ZM0 12.3078H38.0004V13.8463H0V12.3078ZM0 15.3848H38.0004V16.9232H0V15.3848ZM0 18.4617H38.0004V20.0002H0V18.4617Z"
                    fill="#BD3D44"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 1.53809H38.0004V3.07656H0V1.53809ZM0 4.61504H38.0004V6.15352H0V4.61504ZM0 7.69199H38.0004V9.23047H0V7.69199ZM0 10.7689H38.0004V12.3074H0V10.7689ZM0 13.8459H38.0004V15.3844H0V13.8459ZM0 16.9228H38.0004V18.4613H0V16.9228Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0H15.2002V10.7693H0V0Z"
                    fill="#192F5D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.26066 0.461914L1.41449 0.892656H1.84527L1.49141 1.15422L1.62988 1.56961L1.26066 1.30805L0.922188 1.56961L1.06066 1.15422L0.691406 0.892656H1.15301L1.26066 0.461914ZM3.79914 0.461914L3.93762 0.892656H4.38375L4.01453 1.15422L4.16836 1.56961L3.79914 1.30805L3.42992 1.56961L3.58375 1.15422L3.21453 0.892656H3.66066L3.79914 0.461914ZM6.33762 0.461914L6.47609 0.892656H6.92223L6.55301 1.15422L6.70687 1.56961L6.33762 1.30805L5.9684 1.56961L6.12223 1.15422L5.75301 0.892656H6.19918L6.33762 0.461914ZM8.86074 0.461914L9.01457 0.892656H9.44535L9.09148 1.15422L9.22996 1.56961L8.86074 1.30805L8.50687 1.56961L8.64535 1.15422L8.27609 0.892656H8.73766L8.86074 0.461914ZM11.3992 0.461914L11.5377 0.892656H11.9838L11.6146 1.15422L11.7684 1.56961L11.3838 1.30805L11.03 1.56961L11.1684 1.15422L10.7992 0.892656H11.2454L11.3992 0.461914ZM13.9377 0.461914L14.0762 0.892656H14.5223L14.1531 1.15422L14.3069 1.56961L13.9377 1.30805L13.5685 1.56961L13.7223 1.15422L13.3531 0.892656H13.7992L13.9377 0.461914ZM2.53758 1.53883L2.67605 1.96961H3.12223L2.75297 2.23113L2.90684 2.64652L2.53758 2.385L2.16836 2.64652L2.32219 2.23113L1.95297 1.96961H2.39914L2.53758 1.53883ZM5.0607 1.53883L5.21453 1.96961H5.64531L5.29144 2.23113L5.42992 2.64652L5.0607 2.385L4.70684 2.64652L4.84531 2.23113L4.47605 1.96961H4.93762L5.0607 1.53883ZM7.59918 1.53883L7.73766 1.96961H8.18379L7.81457 2.23113L7.9684 2.64652L7.59918 2.385L7.22992 2.64652L7.38379 2.23113L7.01457 1.96961H7.4607L7.59918 1.53883ZM10.1377 1.53883L10.2761 1.96961H10.7223L10.353 2.23113L10.5069 2.64652L10.1377 2.385L9.76844 2.64652L9.92227 2.23113L9.55305 1.96961H9.99922L10.1377 1.53883ZM12.6608 1.53883L12.8146 1.96961H13.23L12.8761 2.23113L13.0146 2.64652L12.6454 2.385L12.2915 2.64652L12.43 2.23113L12.0607 1.96961H12.5223L12.6608 1.53883ZM1.27602 2.61578L1.3991 3.04652H1.86066L1.49141 3.30809L1.62988 3.72348L1.26066 3.46191L0.922188 3.72348L1.06066 3.30809L0.691406 3.04652H1.15301L1.27602 2.61578ZM3.79914 2.61578L3.93762 3.04652H4.38375L4.02992 3.30809L4.16836 3.72348L3.79914 3.46191L3.44527 3.72348L3.58375 3.30809L3.21453 3.04652H3.66066L3.79914 2.61578ZM6.33762 2.61578L6.47609 3.04652H6.92223L6.55301 3.30809L6.70687 3.72348L6.33762 3.46191L5.9684 3.72348L6.12223 3.30809L5.75301 3.04652H6.19918L6.33762 2.61578ZM8.86074 2.61578L9.01457 3.04652H9.44535L9.09148 3.30809L9.22996 3.72348L8.86074 3.46191L8.50687 3.72348L8.64535 3.30809L8.27609 3.04652H8.73766L8.86074 2.61578ZM11.3992 2.61578L11.5377 3.04652H11.9838L11.63 3.30809L11.7684 3.72348L11.3992 3.46191L11.0454 3.72348L11.1838 3.30809L10.8146 3.04652H11.2607L11.3992 2.61578ZM13.9377 2.61578L14.0762 3.04652H14.5223L14.1531 3.30809L14.3069 3.72348L13.9377 3.46191L13.5685 3.72348L13.7223 3.30809L13.3531 3.04652H13.7992L13.9377 2.61578ZM2.53758 3.69266L2.67605 4.12344H3.12223L2.75297 4.38496L2.90684 4.80035L2.53758 4.53883L2.16836 4.80035L2.32219 4.38496L1.95297 4.12344H2.39914L2.53758 3.69266ZM5.0607 3.69266L5.21453 4.12344H5.64531L5.29144 4.38496L5.42992 4.80035L5.0607 4.53883L4.70684 4.80035L4.84531 4.38496L4.47605 4.12344H4.93762L5.0607 3.69266ZM7.59918 3.69266L7.73766 4.12344H8.18379L7.82996 4.38496L7.9684 4.80035L7.59918 4.53883L7.24531 4.80035L7.38379 4.38496L7.01457 4.12344H7.4607L7.59918 3.69266ZM10.1377 3.69266L10.2761 4.12344H10.7223L10.353 4.38496L10.5069 4.80039L10.1377 4.53887L9.76844 4.80039L9.92227 4.385L9.55305 4.12348H9.99922L10.1377 3.69266ZM12.6608 3.69266L12.8146 4.12344H13.23L12.8761 4.38496L13.0146 4.80035L12.6454 4.53883L12.2915 4.80035L12.43 4.38496L12.0607 4.12344H12.5223L12.6608 3.69266ZM1.27602 4.76961L1.3991 5.20035H1.86066L1.49141 5.46191L1.62988 5.87731L1.26066 5.61574L0.922188 5.87731L1.06066 5.46191L0.691406 5.20035H1.15301L1.27602 4.76961ZM3.79914 4.76961L3.93762 5.20035H4.38375L4.02992 5.46191L4.16836 5.87731L3.79914 5.61574L3.44527 5.87731L3.58375 5.46191L3.21453 5.20035H3.66066L3.79914 4.76961ZM6.33762 4.76961L6.47609 5.20035H6.92223L6.55301 5.46191L6.70687 5.87731L6.33762 5.61574L5.9684 5.87731L6.12223 5.46191L5.75301 5.20035H6.19918L6.33762 4.76961ZM8.86074 4.76961L9.01457 5.20035H9.44535L9.09148 5.46191L9.22996 5.87731L8.86074 5.61574L8.50687 5.87731L8.64535 5.46191L8.27609 5.20035H8.73766L8.86074 4.76961ZM11.3992 4.76961L11.5377 5.20035H11.9838L11.63 5.46191L11.7684 5.87731L11.3992 5.61574L11.0454 5.87731L11.1838 5.46191L10.8146 5.20035H11.2607L11.3992 4.76961ZM13.9377 4.76961L14.0762 5.20035H14.5223L14.1531 5.46191L14.3069 5.87731L13.9377 5.61574L13.5685 5.87731L13.7223 5.46191L13.3531 5.20035H13.7992L13.9377 4.76961ZM2.53758 5.84652L2.67605 6.27731H3.12223L2.75297 6.53883L2.90684 6.95422L2.53758 6.6927L2.16836 6.95422L2.32219 6.53883L1.95297 6.27731H2.39914L2.53758 5.84652ZM5.0607 5.84652L5.21453 6.27731H5.64531L5.29144 6.53883L5.42992 6.95422L5.0607 6.6927L4.70684 6.95422L4.84531 6.53883L4.47605 6.27731H4.93762L5.0607 5.84652ZM7.59918 5.84652L7.73766 6.27731H8.18379L7.82996 6.53883L7.9684 6.95422L7.59918 6.6927L7.24531 6.95422L7.38379 6.53883L7.01457 6.27731H7.4607L7.59918 5.84652ZM10.1377 5.84652L10.2761 6.27731H10.7223L10.353 6.53883L10.5069 6.95426L10.1377 6.69273L9.76844 6.95426L9.92227 6.53887L9.55305 6.27734H9.99922L10.1377 5.84652ZM12.6608 5.84652L12.8146 6.27731H13.23L12.8761 6.53883L13.0146 6.95422L12.6454 6.6927L12.2915 6.95422L12.43 6.53883L12.0607 6.27731H12.5223L12.6608 5.84652ZM1.27602 6.92348L1.3991 7.35422H1.86066L1.49141 7.61578L1.62988 8.03117L1.26066 7.76961L0.922188 8.03117L1.06066 7.61578L0.691406 7.35422H1.15301L1.27602 6.92348ZM3.79914 6.92348L3.93762 7.35422H4.38375L4.02992 7.61578L4.16836 8.03117L3.79914 7.76961L3.44527 8.03117L3.58375 7.61578L3.21453 7.35422H3.66066L3.79914 6.92348ZM6.33762 6.92348L6.47609 7.35422H6.92223L6.55301 7.61578L6.70687 8.03117L6.33762 7.76961L5.9684 8.03117L6.12223 7.61578L5.75301 7.35422H6.19918L6.33762 6.92348ZM8.86074 6.92348L9.01457 7.35422H9.44535L9.09148 7.61578L9.22996 8.03117L8.86074 7.76961L8.50687 8.03117L8.64535 7.61578L8.27609 7.35422H8.73766L8.86074 6.92348ZM11.3992 6.92348L11.5377 7.35422H11.9838L11.63 7.61578L11.7684 8.03117L11.3992 7.76961L11.0454 8.03117L11.1838 7.61578L10.8146 7.35422H11.2607L11.3992 6.92348ZM13.9377 6.92348L14.0762 7.35422H14.5223L14.1531 7.61578L14.3069 8.03117L13.9377 7.76961L13.5685 8.03117L13.7223 7.61578L13.3531 7.35422H13.7992L13.9377 6.92348ZM2.53758 8.00043L2.67605 8.43121H3.12223L2.75297 8.69273L2.90684 9.10812L2.53758 8.8466L2.16836 9.10812L2.32219 8.69273L1.95297 8.43121H2.39914L2.53758 8.00043ZM5.0607 8.00043L5.21453 8.43121H5.64531L5.29144 8.69273L5.42992 9.10812L5.0607 8.8466L4.70684 9.10812L4.84531 8.69273L4.47605 8.43121H4.93762L5.0607 8.00043ZM7.59918 8.00043L7.73766 8.43121H8.18379L7.82996 8.69273L7.9684 9.10812L7.59918 8.8466L7.24531 9.10812L7.38379 8.69273L7.01457 8.43121H7.4607L7.59918 8.00043ZM10.1377 8.00043L10.2761 8.43121H10.7223L10.353 8.69273L10.5069 9.10816L10.1377 8.84664L9.76844 9.10816L9.92227 8.69277L9.55305 8.43125H9.99922L10.1377 8.00043ZM12.6608 8.00043L12.8146 8.43121H13.23L12.8761 8.69273L13.0146 9.10812L12.6454 8.8466L12.2915 9.10812L12.43 8.69273L12.0607 8.43121H12.5223L12.6608 8.00043ZM1.27602 9.07738L1.3991 9.50813H1.86066L1.49141 9.76969L1.62988 10.1851L1.26066 9.92352L0.922188 10.1851L1.06066 9.76969L0.691406 9.50813H1.15301L1.27602 9.07738ZM3.79914 9.07738L3.93762 9.50813H4.38375L4.02992 9.76969L4.16836 10.1851L3.79914 9.92352L3.44527 10.1851L3.58375 9.76969L3.21453 9.50813H3.66066L3.79914 9.07738ZM6.33762 9.07738L6.47609 9.50813H6.92223L6.55301 9.76969L6.70687 10.1851L6.33762 9.92352L5.9684 10.1851L6.12223 9.76969L5.75301 9.50813H6.19918L6.33762 9.07738ZM8.86074 9.07738L9.01457 9.50813H9.44535L9.09148 9.76969L9.22996 10.1851L8.86074 9.92352L8.50687 10.1851L8.64535 9.76969L8.27609 9.50813H8.73766L8.86074 9.07738ZM11.3992 9.07738L11.5377 9.50813H11.9838L11.63 9.76969L11.7684 10.1851L11.3992 9.92352L11.0454 10.1851L11.1838 9.76969L10.8146 9.50813H11.2607L11.3992 9.07738ZM13.9377 9.07738L14.0762 9.50813H14.5223L14.1531 9.76969L14.3069 10.1851L13.9377 9.92352L13.5685 10.1851L13.7223 9.76969L13.3531 9.50813H13.7992L13.9377 9.07738Z"
                    fill="white"
                  />
                </g>
                <path
                  d="M28 7L29.4849 8.51508L31 10L29.4849 11.4849L28 13L26.5151 11.4849L25 10L26.5151 8.51508L28 7Z"
                  fill="white"
                />
                <path
                  d="M42.3 4.7V11.014C42.3 12.148 41.502 12.778 40.48 12.778C39.458 12.778 38.66 12.148 38.66 11.014V4.7H36.784V11.014C36.784 13.184 38.128 14.64 40.48 14.64C42.832 14.64 44.176 13.184 44.176 11.014V4.7H42.3ZM48.8751 14.64C51.0031 14.64 52.1511 13.562 52.1511 11.798C52.1511 10.146 51.3391 9.222 49.8271 8.816L48.2311 8.382C47.6991 8.242 47.2511 7.99 47.2511 7.416C47.2511 6.73 47.8111 6.422 48.5951 6.422C49.2251 6.422 49.9111 6.716 50.0791 7.374H52.0111C51.8011 5.708 50.5831 4.56 48.6231 4.56C46.9151 4.56 45.3751 5.456 45.3751 7.416C45.3751 8.858 46.1171 9.908 47.6151 10.314L49.2671 10.762C49.9531 10.944 50.2751 11.252 50.2751 11.798C50.2751 12.47 49.7011 12.778 48.8751 12.778C47.9371 12.778 47.2931 12.232 47.1811 11.406H45.2491C45.3471 13.352 46.7331 14.64 48.8751 14.64ZM57.1353 14.5C59.4873 14.5 60.8313 13.044 60.8313 10.874V8.326C60.8313 6.156 59.4873 4.7 57.1353 4.7H53.4393V14.5H57.1353ZM58.9553 10.874C58.9553 12.008 58.1573 12.638 57.1353 12.638H55.3153V6.562H57.1353C58.1573 6.562 58.9553 7.192 58.9553 8.326V10.874Z"
                  fill="white"
                />
                <defs>
                  <clipPath id="clip0_653_3385">
                    <rect width="20" height="20" rx="10" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="px-3">
          <HorizontalLine />
        </div>
        <div className="p-3 flex justify-between">
          <h1 className="font-semibold">metta muse</h1>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1"
          >
            <path
              d="M3.4001 7.4248L8.83343 12.8581C9.4751 13.4998 10.5251 13.4998 11.1668 12.8581L16.6001 7.4248"
              stroke="white"
              strokeWidth="1.25"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="px-3">
          <HorizontalLine />
        </div>
        <div className="p-3 flex justify-between">
          <h1 className="font-semibold">QUICK LINKS</h1>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1"
          >
            <path
              d="M3.4001 7.4248L8.83343 12.8581C9.4751 13.4998 10.5251 13.4998 11.1668 12.8581L16.6001 7.4248"
              stroke="white"
              strokeWidth="1.25"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="px-3">
          <HorizontalLine />
        </div>
        <div className="p-3 flex justify-between">
          <h1 className="font-semibold">FOLLOW US</h1>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1"
          >
            <path
              d="M3.4001 7.4248L8.83343 12.8581C9.4751 13.4998 10.5251 13.4998 11.1668 12.8581L16.6001 7.4248"
              stroke="white"
              strokeWidth="1.25"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="px-3">
          <HorizontalLine />
        </div>
        <div className="p-3">
          <h1 className="font-semibold">metta muse ACCEPTS</h1>
          <div className="pt-3">
            <svg
              width="343"
              height="30"
              viewBox="0 0 343 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.455357"
                y="0.455357"
                width="50.0893"
                height="29.0893"
                rx="4.09821"
                fill="white"
                stroke="#FFF2F5"
                strokeWidth="0.910714"
              />
              <path
                d="M24.2478 15.1155V19.044H22.9199V9.3454H26.4301C26.8507 9.3387 27.2685 9.41031 27.6596 9.5561C28.0507 9.7019 28.4073 9.91901 28.7089 10.195C28.9946 10.4459 29.225 10.7473 29.3868 11.0821C29.5487 11.4169 29.6388 11.7784 29.6522 12.146C29.6655 12.5136 29.6017 12.88 29.4645 13.2244C29.3272 13.5688 29.1192 13.8843 28.8524 14.153L28.7089 14.2954C28.0958 14.8442 27.2766 15.1425 26.4301 15.1228L24.2478 15.1155ZM24.2478 10.5338V13.9565H26.4627C26.9545 13.9713 27.4293 13.7908 27.7736 13.4606C28.0199 13.2189 28.1853 12.9145 28.2493 12.585C28.3132 12.2556 28.2727 11.9158 28.133 11.6078C27.9933 11.2998 27.7605 11.0373 27.4635 10.8529C27.1665 10.6685 26.8185 10.5703 26.4627 10.5706L24.2478 10.5338ZM32.7056 12.1887C33.5535 12.1519 34.3831 12.4195 35.0248 12.9413C35.6053 13.4692 35.9144 14.2058 35.8727 14.9657V19.0588H34.6087V18.1184H34.5448C34.3181 18.4711 33.9976 18.762 33.6149 18.9625C33.2322 19.1629 32.8005 19.2659 32.3625 19.2613C31.6476 19.2831 30.9504 19.0493 30.4111 18.607C30.1556 18.4108 29.9509 18.1626 29.8124 17.881C29.6738 17.5994 29.6052 17.2918 29.6115 16.9815C29.5965 16.668 29.6612 16.3556 29.8003 16.0703C29.9393 15.785 30.1488 15.5351 30.4111 15.3414C31.0548 14.9057 31.8337 14.6834 32.626 14.7091C33.3004 14.6846 33.9696 14.8233 34.5696 15.1155V14.8601C34.574 14.649 34.5273 14.4397 34.4331 14.248C34.3388 14.0564 34.1995 13.8875 34.0257 13.754C33.6765 13.4552 33.2191 13.2936 32.7473 13.3022C32.4047 13.2992 32.0669 13.3784 31.7658 13.5324C31.4648 13.6864 31.2104 13.9102 31.0268 14.1824L29.8594 13.49C30.1764 13.0626 30.6043 12.7186 31.1026 12.4908C31.6008 12.263 32.1526 12.159 32.7056 12.1887ZM31.0268 17.011C31.0237 17.17 31.0621 17.3273 31.1388 17.469C31.2154 17.6108 31.328 17.7326 31.4664 17.8237C31.7573 18.0398 32.1186 18.154 32.4904 18.1466C33.05 18.1454 33.5861 17.9379 33.9852 17.5671C34.3831 17.216 34.6087 16.7262 34.6087 16.213C34.1066 15.877 33.4964 15.7148 32.8817 15.7539C32.4044 15.7362 31.9336 15.8627 31.5381 16.1148C31.3815 16.2134 31.253 16.3467 31.1639 16.503C31.0747 16.6592 31.0277 16.8337 31.0268 17.011ZM43.1396 12.4072L38.7176 21.9708H37.3506L39.0215 18.6217L36.1205 12.4072H37.5593L39.662 17.1767L41.7086 12.4072H43.1396Z"
                fill="#5F6368"
              />
              <path
                d="M18.8904 14.2679C18.8904 13.8898 18.859 13.5116 18.7951 13.1384H13.1992V15.2832H16.3963C16.3312 15.624 16.1937 15.949 15.992 16.2387C15.7903 16.5283 15.5285 16.7766 15.2224 16.9688V18.361H17.132C17.7127 17.8322 18.1691 17.1948 18.472 16.4898C18.7748 15.7848 18.9174 15.0279 18.8904 14.2679Z"
                fill="#4285F4"
              />
              <path
                d="M13.2073 19.7134C14.6504 19.7507 16.0544 19.2691 17.1336 18.3666L15.2213 16.9671C14.7619 17.2443 14.2413 17.4193 13.6991 17.4788C13.157 17.5382 12.6076 17.4805 12.0927 17.3101C11.5778 17.1396 11.111 16.8609 10.7278 16.4951C10.3445 16.1294 10.055 15.6862 9.8811 15.1992H7.92188V16.6356C8.41214 17.5601 9.16634 18.3377 10.0999 18.8814C11.0335 19.425 12.1095 19.7131 13.2073 19.7134Z"
                fill="#34A853"
              />
              <path
                d="M9.88169 15.209C9.63358 14.5182 9.63358 13.7698 9.88169 13.079V11.6426H7.92247C7.50478 12.4178 7.28711 13.2748 7.28711 14.144C7.28711 15.0132 7.50478 15.8701 7.92247 16.6454L9.88169 15.209Z"
                fill="#FBBC04"
              />
              <path
                d="M13.2073 10.7772C14.0513 10.7627 14.8671 11.0628 15.477 11.612L17.1727 10.0247C16.0915 9.06953 14.6574 8.54856 13.1747 8.57231C12.0834 8.57746 11.0149 8.86696 10.0878 9.4087C9.16057 9.95044 8.41091 10.7233 7.92188 11.6415L9.8811 13.0791C10.1102 12.4163 10.5543 11.8377 11.1509 11.4248C11.7476 11.0119 12.4668 10.7854 13.2073 10.7772Z"
                fill="#EA4335"
              />
              <rect
                x="59.4464"
                y="0.446429"
                width="49.1071"
                height="29.1071"
                rx="4.01786"
                fill="white"
                stroke="#FFF2F5"
                strokeWidth="0.892857"
              />
              <path
                d="M78.6647 23.1875C83.6087 23.1875 87.6165 19.3399 87.6165 14.5937C87.6165 9.84754 83.6087 6 78.6647 6C73.7208 6 69.7129 9.84754 69.7129 14.5937C69.7129 19.3399 73.7208 23.1875 78.6647 23.1875Z"
                fill="#EB001B"
              />
              <path
                d="M88.8952 23.1875C93.8391 23.1875 97.847 19.3399 97.847 14.5937C97.847 9.84754 93.8391 6 88.8952 6C83.9512 6 79.9434 9.84754 79.9434 14.5937C79.9434 19.3399 83.9512 23.1875 88.8952 23.1875Z"
                fill="#F79E1B"
              />
              <path
                d="M87.6164 14.5922C87.6164 11.6458 86.0818 9.06769 83.7799 7.59448C81.478 9.19046 79.9434 11.7686 79.9434 14.5922C79.9434 17.4159 81.478 20.1168 83.7799 21.59C86.0818 20.1168 87.6164 17.5387 87.6164 14.5922Z"
                fill="#FF5F00"
              />
              <rect
                x="117.455"
                y="0.455357"
                width="50.0893"
                height="29.0893"
                rx="4.09821"
                fill="white"
                stroke="#FFF2F5"
                strokeWidth="0.910714"
              />
              <path
                d="M148.332 11.0168C148.597 9.75634 148.332 8.87398 147.536 8.11768C146.741 7.23533 145.284 6.85718 143.429 6.85718H137.996C137.598 6.85718 137.333 7.10928 137.201 7.48743L135.213 20.2185C135.213 20.4706 135.345 20.7227 135.61 20.7227H139.188L139.718 16.437L142.103 13.6639L148.332 11.0168Z"
                fill="#003087"
              />
              <path
                d="M148.332 11.0156L148.067 11.2677C147.404 14.7971 145.151 16.0576 141.971 16.0576H140.513C140.116 16.0576 139.851 16.3097 139.718 16.6879L138.923 21.6039L138.658 22.8644C138.658 23.1165 138.791 23.3686 139.056 23.3686H141.838C142.236 23.3686 142.501 23.1165 142.501 22.8644V22.7383L143.031 19.7131V19.5871C143.031 19.335 143.429 19.0829 143.694 19.0829H144.091C146.874 19.0829 148.994 18.0744 149.524 15.0492C149.789 13.7887 149.657 12.7803 148.994 12.024C148.862 11.3938 148.597 11.1417 148.332 11.0156Z"
                fill="#3086C8"
              />
              <path
                d="M147.537 10.7649C147.404 10.6388 147.272 10.6388 147.139 10.6388C147.007 10.6388 146.874 10.6388 146.742 10.5128C146.344 10.3867 145.814 10.3867 145.284 10.3867H141.309C141.176 10.3867 141.044 10.3867 141.044 10.5128C140.779 10.6388 140.646 10.7649 140.646 11.017L139.719 16.5632V16.6892C139.719 16.3111 140.116 16.059 140.514 16.059H142.236C145.549 16.059 147.669 14.7985 148.332 11.2691V11.017C148.199 10.8909 147.934 10.7649 147.669 10.7649H147.537Z"
                fill="#012169"
              />
              <rect
                x="176.446"
                y="0.446429"
                width="49.1071"
                height="29.1071"
                rx="4.01786"
                fill="#006FCF"
                stroke="#FFF2F5"
                strokeWidth="0.892857"
              />
              <path
                d="M188.607 13.07L189.597 15.3731H187.625L188.607 13.07ZM209.164 13.1658H205.357V14.1811H209.103V15.7021H205.365V16.8341H209.172V17.7413L211.828 14.9852L209.172 12.1124L209.164 13.1658ZM191.18 10.293H196.289L197.423 12.6686L198.475 10.2856H211.736L213.115 11.7466L214.541 10.2856H220.632L216.131 15.0147L220.586 19.7142H214.404L213.025 18.2533L211.586 19.7142H189.961L189.33 18.2533H187.885L187.252 19.7142H182.25L186.452 10.2856H190.839L191.18 10.293ZM202.259 11.6164H199.395L197.477 15.9575L195.399 11.6164H192.557V17.5216L189.923 11.6164H187.374L184.328 18.3834H186.317L186.948 16.9225H190.268L190.9 18.3834H194.378V13.5525L196.618 18.3908H198.139L200.365 13.5672V18.392H202.229L202.26 11.6152L202.259 11.6164ZM214.203 15.0147L217.44 11.6164H215.11L213.062 13.7354L211.083 11.6164H203.545V18.3908H210.975L213.039 16.2571L215.019 18.3908H217.417L214.203 15.0147Z"
                fill="white"
              />
              <rect
                x="234.455"
                y="0.455357"
                width="50.0893"
                height="29.0893"
                rx="4.09821"
                fill="white"
                stroke="#FFF2F5"
                strokeWidth="0.910714"
              />
              <path
                d="M247.942 9.52728C248.357 9.03929 248.638 8.38391 248.564 7.71436C247.957 7.74272 247.217 8.09112 246.788 8.57967C246.403 8.99786 246.062 9.68049 246.151 10.322C246.832 10.3776 247.513 10.0016 247.942 9.52728Z"
                fill="black"
              />
              <path
                d="M248.556 10.4473C247.566 10.3917 246.725 10.9756 246.253 10.9756C245.78 10.9756 245.057 10.4751 244.274 10.4888C243.256 10.5027 242.311 11.0449 241.794 11.9069C240.731 13.6308 241.513 16.1889 242.547 17.5931C243.049 18.2882 243.654 19.0529 244.452 19.0254C245.205 18.9976 245.5 18.5666 246.415 18.5666C247.33 18.5666 247.596 19.0254 248.393 19.0115C249.22 18.9976 249.737 18.3163 250.239 17.6212C250.815 16.8287 251.051 16.0641 251.065 16.0224C251.051 16.0085 249.471 15.4382 249.456 13.7281C249.442 12.2961 250.697 11.6149 250.756 11.5729C250.047 10.5864 248.94 10.4751 248.556 10.4473"
                fill="black"
              />
              <path
                d="M258.418 8.51147C260.568 8.51147 262.066 9.90648 262.066 11.9374C262.066 13.9756 260.538 15.3778 258.364 15.3778H255.984V18.9414H254.264V8.51147H258.418ZM255.984 14.0189H257.957C259.455 14.0189 260.307 13.2601 260.307 11.9446C260.307 10.6294 259.455 9.87756 257.965 9.87756H255.984V14.0189Z"
                fill="black"
              />
              <path
                d="M262.492 16.7795C262.492 15.4424 263.575 14.6763 265.572 14.5606L267.714 14.4377V13.8594C267.714 13.0141 267.123 12.5514 266.071 12.5514C265.203 12.5514 264.573 12.9704 264.443 13.6136H262.891C262.938 12.2622 264.289 11.2793 266.117 11.2793C268.083 11.2793 269.365 12.2478 269.365 13.7512V18.9406H267.776V17.6902H267.737C267.284 18.5068 266.286 19.0198 265.203 19.0198C263.606 19.0198 262.492 18.1239 262.492 16.7795ZM267.714 16.1075V15.5219L265.802 15.6375C264.727 15.7026 264.166 16.0783 264.166 16.7359C264.166 17.3721 264.75 17.7841 265.664 17.7841C266.831 17.7841 267.714 17.0829 267.714 16.1075Z"
                fill="black"
              />
              <path
                d="M270.828 21.7303V20.4802C270.936 20.4944 271.197 20.5088 271.335 20.5088C272.095 20.5088 272.525 20.2057 272.786 19.4247L272.94 18.9623L270.029 11.3733H271.826L273.854 17.5311H273.892L275.919 11.3733H277.67L274.652 19.3452C273.961 21.1739 273.17 21.774 271.496 21.774C271.366 21.774 270.943 21.7595 270.828 21.7303Z"
                fill="black"
              />
              <rect
                x="293.446"
                y="0.446429"
                width="49.1071"
                height="29.1071"
                rx="4.01786"
                fill="#5A31F4"
                stroke="#FFF2F5"
                strokeWidth="0.892857"
              />
              <path
                d="M321.334 11.7818C321.334 13.8296 319.828 15.2905 317.726 15.2905H315.745C315.712 15.291 315.68 15.3005 315.653 15.3179C315.626 15.3353 315.605 15.3599 315.592 15.3887C315.583 15.4078 315.579 15.4282 315.579 15.4489V18.14C315.579 18.1609 315.575 18.1816 315.566 18.2008C315.558 18.2201 315.546 18.2377 315.53 18.2524C315.515 18.2671 315.496 18.2787 315.476 18.2866C315.456 18.2945 315.434 18.2985 315.413 18.2983H314.026C313.982 18.2983 313.94 18.2815 313.909 18.2516C313.878 18.2217 313.86 18.1811 313.86 18.1387V8.43396C313.86 8.40234 313.869 8.37131 313.887 8.345C313.906 8.31869 313.932 8.29834 313.962 8.28664C313.983 8.2785 314.004 8.27433 314.026 8.27436H317.735C319.828 8.27436 321.334 9.73407 321.334 11.7818ZM319.605 11.7818C319.605 10.6057 318.763 9.74634 317.622 9.74634H315.745C315.723 9.74634 315.702 9.75047 315.681 9.75849C315.661 9.76651 315.643 9.77827 315.628 9.79309C315.612 9.80791 315.6 9.8255 315.591 9.84486C315.583 9.86423 315.579 9.88498 315.579 9.90594V13.6503C315.579 13.6713 315.583 13.6922 315.591 13.7116C315.599 13.731 315.612 13.7486 315.627 13.7633C315.643 13.7782 315.661 13.7899 315.681 13.798C315.702 13.806 315.723 13.81 315.745 13.8099H317.622C318.763 13.8161 319.605 12.9567 319.605 11.7818ZM321.745 16.4359C321.731 16.1214 321.799 15.8084 321.943 15.5259C322.088 15.2433 322.305 15.0002 322.573 14.8191C323.114 14.4312 323.959 14.2298 325.201 14.1881L326.522 14.1439V13.7719C326.522 13.0267 325.997 12.7124 325.156 12.7124C324.315 12.7124 323.781 12.996 323.66 13.4613C323.649 13.494 323.628 13.5225 323.599 13.5425C323.57 13.5624 323.535 13.5727 323.5 13.5718H322.193C322.157 13.5722 322.122 13.5615 322.093 13.5411C322.064 13.5207 322.042 13.4919 322.032 13.4588C322.025 13.437 322.023 13.4139 322.027 13.3913C322.221 12.2889 323.183 11.4516 325.216 11.4516C327.38 11.4516 328.161 12.4129 328.161 14.2458V18.14C328.161 18.161 328.157 18.1818 328.148 18.2012C328.139 18.2206 328.127 18.2382 328.111 18.2529C328.096 18.2676 328.077 18.2792 328.057 18.287C328.036 18.2948 328.014 18.2987 327.992 18.2983H326.675C326.631 18.2983 326.589 18.2815 326.558 18.2516C326.527 18.2217 326.509 18.1811 326.509 18.1387V17.849C326.509 17.825 326.502 17.8014 326.488 17.7814C326.474 17.7614 326.454 17.746 326.431 17.7373C326.408 17.7286 326.383 17.7265 326.358 17.7313C326.334 17.7361 326.312 17.7475 326.294 17.7643C325.898 18.1743 325.261 18.4702 324.239 18.4702C322.736 18.4702 321.745 17.725 321.745 16.4359ZM326.522 15.5925V15.2905L324.809 15.3765C323.908 15.4207 323.384 15.7767 323.384 16.3782C323.384 16.9233 323.864 17.2253 324.706 17.2253C325.848 17.2253 326.522 16.6361 326.522 15.5925ZM329.484 21.2398V20.1116C329.484 20.088 329.49 20.0647 329.501 20.0435C329.511 20.0222 329.527 20.0036 329.546 19.9888C329.565 19.974 329.588 19.9633 329.611 19.9576C329.635 19.9519 329.66 19.9512 329.684 19.9557C329.886 19.9913 330.091 20.0097 330.297 20.0097C330.65 20.0283 330.998 19.9322 331.287 19.7371C331.576 19.542 331.788 19.2592 331.889 18.9343L331.975 18.6752C331.987 18.6403 331.987 18.6022 331.975 18.5672L329.232 11.8506C329.216 11.8137 329.215 11.7725 329.229 11.735C329.243 11.6975 329.272 11.6665 329.308 11.648C329.333 11.6356 329.36 11.6293 329.388 11.6296H330.718C330.752 11.6297 330.785 11.6397 330.813 11.6583C330.841 11.677 330.863 11.7033 330.875 11.7339L332.737 16.4715C332.748 16.5034 332.77 16.5309 332.799 16.5503C332.827 16.5697 332.862 16.5799 332.897 16.5796C332.932 16.5795 332.966 16.5691 332.994 16.5498C333.023 16.5305 333.045 16.5031 333.057 16.4715L334.674 11.7475C334.685 11.7149 334.707 11.6866 334.736 11.6667C334.765 11.6468 334.8 11.6364 334.835 11.637H336.211C336.253 11.6372 336.293 11.6517 336.324 11.6779C336.355 11.7041 336.375 11.7401 336.38 11.7794C336.383 11.8056 336.38 11.8321 336.37 11.8567L333.435 19.3161C332.76 21.0508 331.603 21.4927 330.328 21.4927C330.086 21.4991 329.844 21.4719 329.61 21.4117C329.571 21.4025 329.537 21.3801 329.513 21.3485C329.49 21.317 329.48 21.2784 329.484 21.2398ZM304.949 7.71454C303.204 7.70202 301.52 8.32851 300.239 9.46643C300.185 9.51401 300.151 9.57942 300.144 9.64982C300.137 9.72023 300.158 9.79056 300.202 9.84701L300.992 10.877C301.018 10.9118 301.051 10.9407 301.09 10.9616C301.128 10.9826 301.171 10.9952 301.216 10.9985C301.26 11.0018 301.304 10.9957 301.346 10.9806C301.387 10.9656 301.425 10.9419 301.455 10.9114C301.916 10.4726 302.462 10.1262 303.063 9.89221C303.665 9.65826 304.308 9.54148 304.957 9.54869C307.668 9.54869 309.084 11.4933 309.084 13.4159C309.084 15.5029 307.596 16.9737 305.458 17.0019C303.806 17.0019 302.56 15.9584 302.56 14.5785C302.562 14.2295 302.644 13.8853 302.802 13.571C302.96 13.2566 303.189 12.9801 303.472 12.7615C303.532 12.714 303.571 12.6455 303.579 12.571C303.587 12.4965 303.563 12.422 303.514 12.3637L302.683 11.3632C302.658 11.3324 302.627 11.3069 302.591 11.288C302.555 11.2692 302.516 11.2574 302.476 11.2536C302.435 11.2497 302.394 11.2537 302.355 11.2653C302.317 11.277 302.281 11.2961 302.25 11.3214C301.74 11.7135 301.329 12.2097 301.045 12.7738C300.762 13.3367 300.615 13.9535 300.614 14.5785C300.614 16.954 302.73 18.8164 305.442 18.8311H305.48C308.699 18.7919 311.026 16.5182 311.026 13.411C311.026 10.6524 308.894 7.71454 304.949 7.71454Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-sm text-center mt-2">Copyright © 2023 mettamuse. All rights reserved.</h1>
      </div>
    </>
  );
};

export default MiniFooter;
