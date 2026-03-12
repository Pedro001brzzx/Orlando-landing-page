import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(type = 'fadeUp', options = {}) {
    const container = useRef(null);

    useGSAP(() => {
        if (!container.current) return;

        // Setting toggleActions to 'play reverse play reverse' resets the animation on scroll up and down
        const defaultToggleActions = 'play reverse play reverse';

        if (type === 'fadeUp') {
            gsap.from(container.current, {
                y: 80,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: defaultToggleActions,
                    ...options
                }
            });
        } else if (type === 'staggerChildren') {
            const q = gsap.utils.selector(container);
            gsap.from(q(options.selector || '> *'), {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: defaultToggleActions,
                    ...options
                }
            });
        } else if (type === 'nav') {
            gsap.from(container.current, {
                yPercent: -100,
                opacity: 0,
                duration: 1.2,
                ease: 'power4.out',
            });
        } else if (type === 'scaleIn') {
            const q = gsap.utils.selector(container);
            gsap.from(q(options.selector || '> *'), {
                scale: 0.9,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'back.out(1.2)',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: defaultToggleActions,
                    ...options
                }
            });
        }
    }, { scope: container });

    return container;
}
