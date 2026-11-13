/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router";

function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-100">
      <div className="w-full lg:w-1/2 text-center p-6">
        <p class="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-black-300">
          404
        </p>
        <p class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-black-300 mt-2">
          Page Not Found
        </p>
        <div className="w-[1000px] p-6">
          <Link to="/">
            <span className="text-blue-600 text-lg font-semibold underline hover:text-blue-400 transition-colors duration-200">
              GO HOME
            </span>
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-1/2 lg:h-full flex lg:items-end justify-center p-4">
        <svg
          className="w-full text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1120.59226 777.91584"
        >
          <title>not found</title>

          <circle cx="212.59226" cy="103" r="64" fill="#ff6584" />

          <path
            d="M563.68016,404.16381c0,151.01141-89.77389,203.73895-200.51559,203.73895S162.649,555.17522,162.649,404.16381,363.16457,61.04208,363.16457,61.04208,563.68016,253.1524,563.68016,404.16381Z"
            transform="translate(-39.70387 -61.04208)"
            fill="#cbd5e1"
          />

          <polygon
            points="316.156 523.761 318.21 397.378 403.674 241.024 318.532 377.552 319.455 320.725 378.357 207.605 319.699 305.687 321.359 203.481 384.433 113.423 321.621 187.409 322.658 0 316.138 248.096 316.674 237.861 252.547 139.704 315.646 257.508 309.671 371.654 235.565 265.329 309.269 379.328 308.522 393.603 293.29 684.589 313.544 684.589 315.974 535.005 389.496 421.285 316.156 523.761"
            fill="#3f3d56"
          />

          <path
            d="M1160.29613,466.01367c0,123.61-73.4842,166.77-164.13156,166.77s-164.13156-43.16-164.13156-166.77S996.16457,185.15218,996.16457,185.15218,1160.29613,342.40364,1160.29613,466.01367Z"
            transform="translate(-39.70387 -61.04208)"
            fill="#cbd5e1"
          />

          <polygon
            points="950.482 552.833 952.162 449.383 1022.119 321.4 952.426 433.154 953.182 386.639 1001.396 294.044 953.382 374.329 954.741 290.669 1006.369 216.952 954.954 277.514 955.804 124.11 950.467 327.188 950.906 318.811 898.414 238.464 950.064 334.893 945.173 428.327 884.514 341.294 944.844 434.608 944.232 446.293 931.764 684.478 948.343 684.478 950.332 562.037 1010.514 468.952 950.482 552.833"
            fill="#3f3d56"
          />

          <ellipse
            cx="554.59226"
            cy="680.47903"
            rx="554.59226"
            ry="28.03433"
            fill="#3f3d56"
          />

          <ellipse
            cx="892.44491"
            cy="726.79663"
            rx="94.98858"
            ry="4.80162"
            fill="#3f3d56"
          />
        </svg>
      </div>
    </div>
  );
}
export default NotFound;
