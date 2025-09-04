import { MotionEffect } from './animate-ui/motion-effect';

type MotionEffectFadeBlurDemoProps = {
    children?: React.ReactNode;
};

export const MotionEffectFadeBlurDemo = ({ children }: MotionEffectFadeBlurDemoProps) => {
    return (
        <MotionEffect
            fade
            blur="10px"
            transition={{
                duration: 0.5,
                ease: 'easeInOut',
            }}
            inView
        >
            {children}
        </MotionEffect>
    );
};