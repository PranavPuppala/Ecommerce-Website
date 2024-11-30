import React, { useState } from "react";
import { IconComponent } from "./icon";

const SIZES = {
  SMALL: {
    key: "s",
    size: 10,
  },
  MEDIUM: {
    key: "m",
    size: 18,
  },
  LARGE: {
    key: "l",
    size: 28,
  },
};

const OUT_OF_VALUE = 5;

interface RatingProps {
  iconSize: "s" | "m" | "l";
  ratingInPercent: number;
  showOutOf: boolean;
  enableUserInteraction: boolean;
  onClick?: (rating: number) => void;
}

export const Rating: React.FC<RatingProps> = ({
  iconSize,
  ratingInPercent,
  showOutOf,
  enableUserInteraction,
  onClick,
}) => {
  const [activeStar, setActiveStar] = useState<number>(-1);
  const decimal = ratingInPercent / 20;
  const nonFraction = Math.trunc(decimal);
  const fraction = Number((decimal - nonFraction).toFixed(2));
  const fractionPercent = fraction * 100;

  const numberOfStar = OUT_OF_VALUE;
  const size =
    iconSize === SIZES.SMALL.key
      ? SIZES.SMALL.size
      : iconSize === SIZES.MEDIUM.key
      ? SIZES.MEDIUM.size
      : SIZES.LARGE.size;

  const RatingHighlighted = <IconComponent type={"ratingHighlighted"} width={size} height={size} />;
  const RatingDefault = <IconComponent type={"ratingDefault"} width={size} height={size} />;

  const handleClick = (index: number) => {
    if (onClick) {
      onClick(index + 1);
    }
    setActiveStar(index);
  };

  const showDefaultStar = (index: number) => {
    return RatingDefault;
  };

  let isShow = true;
  const getStar = (index: number) => {
    if (index <= nonFraction - 1) {
      isShow = true;
      return "100%";
    } else if (fractionPercent > 0 && isShow) {
      isShow = false;
      return `${fractionPercent}%`;
    } else {
      return "0%";
    }
  };

  const isShowOutOfStar = (index: number) => {
    if (showOutOf) {
      return showOutOf;
    }

    const isLoopThrough = (fraction === 0 ? nonFraction : nonFraction + 1) - 1;
    return index <= isLoopThrough;
  };

  const withoutUserInteraction = (index: number) => {
    return isShowOutOfStar(index) ? (
      <div className="relative" key={index}>
        <div
          className="absolute overflow-hidden"
          style={{
            width: getStar(index),
          }}
        >
          {RatingHighlighted}
        </div>
        {showDefaultStar(
          showOutOf
            ? nonFraction === 0
              ? index < nonFraction
                ? 1
                : 0
              : index <= nonFraction
              ? 1
              : 0
            : index <= numberOfStar
            ? 1
            : 0
        )}
      </div>
    ) : null;
  };

  const withUserInteraction = (index: number) => {
    return (
      <div className="relative cursor-pointer" onClick={() => handleClick(index)} key={index}>
        <div
          className="absolute overflow-hidden"
          style={{
            width: index <= activeStar ? "100%" : "0%",
          }}
        >
          {RatingHighlighted}
        </div>
        {showDefaultStar(index)}
      </div>
    );
  };

  return (
    <div className="inline-flex gap-2">
      {[...new Array(numberOfStar)].map((arr, index) =>
        enableUserInteraction ? withUserInteraction(index) : withoutUserInteraction(index)
      )}
    </div>
  );
};
