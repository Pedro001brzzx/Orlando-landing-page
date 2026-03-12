import { useState, useRef, useEffect } from "react";

export function useCarousel(gap = 24, itemSelector = ".o360-carousel-item") {
    const [pos, setPos] = useState(0);
    const trackRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const posRef = useRef(0);
    posRef.current = pos;

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        track.style.cursor = 'grab';

        const onDragStart = (e) => {
            isDragging.current = true;
            startX.current = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
            track.style.transition = 'none';
            track.style.cursor = 'grabbing';
            // Disable native image dragging
            e.preventDefault();
        };

        const onDragMove = (e) => {
            if (!isDragging.current) return;
            const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
            const diff = startX.current - currentX;
            track.style.transform = `translateX(-${posRef.current + diff}px)`;
        };

        const onDragEnd = (e) => {
            if (!isDragging.current) return;
            isDragging.current = false;
            track.style.transition = 'transform .4s cubic-bezier(.25, .46, .45, .94)';
            track.style.cursor = 'grab';

            const currentX = e.type.includes('mouse') ? e.pageX : e.changedTouches[0].clientX;
            const diff = startX.current - currentX;
            let newPos = posRef.current + diff;

            const items = track.querySelectorAll(itemSelector);
            if (items.length >= 2) {
                const itemW = items[0].getBoundingClientRect().width + gap;
                const visibleWidth = track.parentElement.getBoundingClientRect().width;
                const totalWidth = items.length * itemW;
                const maxPos = totalWidth - visibleWidth;

                // Loop logic and snapping
                if (newPos > maxPos + itemW / 2) {
                    newPos = 0;
                } else if (newPos < -itemW / 2) {
                    newPos = Math.floor(maxPos / itemW) * itemW;
                } else {
                    newPos = Math.round(newPos / itemW) * itemW;
                }

                if (newPos > maxPos) newPos = maxPos;
                if (newPos < 0) newPos = 0;
            }

            setPos(newPos);
            track.style.transform = `translateX(-${newPos}px)`;
        };

        track.addEventListener('mousedown', onDragStart);
        track.addEventListener('touchstart', onDragStart, { passive: false }); // false for preventDefault

        window.addEventListener('mousemove', onDragMove);
        window.addEventListener('touchmove', onDragMove, { passive: true });

        window.addEventListener('mouseup', onDragEnd);
        window.addEventListener('touchend', onDragEnd);

        return () => {
            track.removeEventListener('mousedown', onDragStart);
            track.removeEventListener('touchstart', onDragStart);
            window.removeEventListener('mousemove', onDragMove);
            window.removeEventListener('touchmove', onDragMove);
            window.removeEventListener('mouseup', onDragEnd);
            window.removeEventListener('touchend', onDragEnd);
        };
    }, [gap, itemSelector]);

    return { pos, trackRef };
}
