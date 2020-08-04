import keySpacePress from './../../audio/mxblack/press/SPACE.mp3';
import keySpaceRelease from './../../audio/mxblack/release/SPACE.mp3';
import keyEnterPress from './../../audio/mxblack/press/ENTER.mp3';
import keyEnterRelease from './../../audio/mxblack/release/ENTER.mp3';
import keyBackspacePress from './../../audio/mxblack/press/BACKSPACE.mp3';
import keyBackspaceRelease from './../../audio/mxblack/release/BACKSPACE.mp3';
import keyGenericPressR0 from './../../audio/mxblack/press/GENERIC_R0.mp3';
import keyGenericPressR1 from './../../audio/mxblack/press/GENERIC_R1.mp3';
import keyGenericPressR2 from './../../audio/mxblack/press/GENERIC_R2.mp3';
import keyGenericPressR3 from './../../audio/mxblack/press/GENERIC_R3.mp3';
import keyGenericPressR4 from './../../audio/mxblack/press/GENERIC_R4.mp3';
import keyGenericRelease from './../../audio/mxblack/release/GENERIC.mp3';

export const mxblack = {
  press: {
    SPACE: keySpacePress,
    ENTER: keyEnterPress,
    BACKSPACE: keyBackspacePress,
    GENERICR0: keyGenericPressR0,
    GENERICR1: keyGenericPressR1,
    GENERICR2: keyGenericPressR2,
    GENERICR3: keyGenericPressR3,
    GENERICR4: keyGenericPressR4,
  },
  release: {
    SPACE: keySpaceRelease,
    ENTER: keyEnterRelease,
    BACKSPACE: keyBackspaceRelease,
    GENERIC: keyGenericRelease,
  },
}
