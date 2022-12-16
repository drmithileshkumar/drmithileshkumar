// @ts-nocheck
export function ripple (node) {
    node.style.position = 'relative';
    node.style.overflow = 'hidden';
    const handleClick = (event) => {
        const circle = document.createElement('span');
        const diameter = Math.max(node.clientWidth, node.clientHeight);
        const radius = diameter / 2;
        
        const rect = node.getBoundingClientRect();
        circle.style.left = `${event.pageX - (rect.left + window.scrollX + radius)}px`;
        circle.style.top = `${event.pageY - (rect.top + window.scrollY + radius)}px`;
        
        circle.style.width = circle.style.height = `${diameter}px`;
        
        
        circle.classList.add('ripple');
        const rippleSpan = node.getElementsByClassName('ripple')[0];
        if(rippleSpan) {rippleSpan.remove()};
        node.appendChild(circle);
    }
    node.addEventListener('click', handleClick, true);
    return {
        destroy() {
            document.removeEventListener("click", handleClick, true);
        }
    }
}