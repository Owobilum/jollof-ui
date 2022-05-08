import React from 'react';
import classNames from 'classnames';

import './Grid.scss';

type BreakpointType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type JustifyType =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-evenly'
  | 'space-around';

type AlignType = JustifyType | 'stretch' | 'baseline';

export interface GridProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
  container?: boolean;
  item?: boolean;
  justifyContent?: JustifyType;
  alignItems?: AlignType;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  xs?: BreakpointType;
  sm?: BreakpointType;
  md?: BreakpointType;
  lg?: BreakpointType;
  gap?: BreakpointType;
}

const Grid: React.FC<GridProps> = (props) => {
  const {
    children,
    container,
    item,
    justifyContent,
    alignItems,
    flexDirection,
    xs,
    sm,
    md,
    lg,
    gap,
  } = props;

  const gridStyle = classNames(
    { [`JUI_grid_container`]: container },
    { [`JUI_grid_item`]: item },
    { [`JUI_grid_justify_${justifyContent}`]: justifyContent },
    { [`JUI_grid_align_${alignItems}`]: alignItems },
    { [`JUI_grid_direction_${flexDirection}`]: flexDirection },
    { [`JUI_grid_xs_${xs}`]: xs },
    { [`JUI_grid_sm_${sm}`]: sm },
    { [`JUI_grid_md_${md}`]: md },
    { [`JUI_grid_lg_${lg}`]: lg },
    { [`JUI_grid_gap_${gap}`]: gap }
  );

  return (
    <div className={gridStyle} {...props}>
      {children}
    </div>
  );
};

export default Grid;
