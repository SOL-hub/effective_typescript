interface Rocket {
    name: string;
    variant: string;
    thrust_kN: number;
}

const falconHeavy: Rocket = {
    name: 'Falcon Heavy',
    variant: 'v1',
    thrust_kN: 15_200
};

//type Vec3D = Record<'x' | 'y' | 'z', number>;
/** 
   Type Vec3D {
      x: number;
      y: number;
      z: number;
  }
*/

type Vec3D = {[k in 'x' | 'y' | 'z']: number};
// Type Vec3D = {
//     x: number,
//     y: number;
//     z: number;
// }

type ABC = {[k in 'a' | 'b' | 'c']: k extends 'b' ? string: number}; //조건부 타입