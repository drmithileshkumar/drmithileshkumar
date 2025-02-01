
<ul>
    <li>
        <strong>Size</strong>:
        <ul>
        <li>
            Small (≤ 10 elements) → <em>Use Insertion Sort or Binary Insertion Sort</em>
        </li>
        <li>
            Medium (~10² to 10⁶ elements) → <em>Use Quick Sort, Merge Sort, or Heap Sort</em>
        </li>
        <li>Large (> 10⁶ elements) → <em>Use Timsort or External Sorting</em></li>
        <li>
            Very Large (> 1 billion elements) → <em>Use External Merge Sort or MapReduce Sorting</em>
        </li>
    </ul>
    </li>
    <li>
        <strong>in-place (O(1) extra space)?</strong>
        <ul>
            <li>Yes → <em>Quick Sort, Heap Sort, or Cycle Sort</em></li>
            <li>No → <em>Merge Sort or Counting Sort (for small integer keys)</em></li>
        </ul>
    </li>
    <li>
        <strong>Stable</strong>
        <ul>
            <li>Yes → <em>Merge Sort, Timsort, Counting Sort, or Radix Sort</em></li>
            <li>No → <em>Quick Sort, Heap Sort, or Shell Sort</em></li>
        </ul>
    </li>
    <li>
        <strong>Fastest sorting for arbitrary data</strong>
        <ul>
            <li>Yes → <em>Use Introsort (Quick Sort + Heap Sort hybrid)</em></li>
        </ul>
    </li>
    <li>
        <strong>data fit entirely in memory</strong>
        <ul>
            <li>Yes → <em>Use in-memory sorting algorithms</em></li>
            <li>No → <em>Use External Merge Sort or Parallel Sorting</em></li>
        </ul>
    </li>
    <li>
        <strong>parallel or distributed sorting</strong>
        <ul>
            
            <li>
                <em>Parallel CPU/GPU</em> →
                <em>Bitonic Sort, Odd-Even Sort, Sample Sort</em>
            </li>
            <li>
                <em>Distributed Systems</em> →
                <em>MapReduce Sort, Parallel Merge Sort</em>
            </li>
            <li>
                <em>Streaming Data (Infinite Input)</em> →
                <em>Lazy Sort, Approximate Sort</em>
            </li>
                
        </ul>
    </li>
    <li>
        <strong>numeric (integer) data in a known range</strong>
        <ul>
            <li>Yes → <em>Counting Sort, Radix Sort, or Bucket Sort</em></li>
            <li>No → Use a comparison-based algorithm</li>
        </ul>
    </li>
    <li>
        <strong>elements nearly sorted</strong>
        <ul>
            <li>Yes → <em>Insertion Sort or Timsort</em></li>
            <li>No → Continue</li>
        </ul>
    </li>
    <li>
        <strong>Sort in real-time (low-latency applications)</strong>
        <ul>
            <li>Yes → <em>Smoothsort, Patience Sorting, or Partial Sorting</em></li>
            <li>No → Continue</li>
        </ul>
    </li>
    <li>
        <strong>Cache-efficient sorting algorithm</strong>
        <ul>
            <li>Yes → <em>Use Timsort or Block Merge Sort</em></li>
            <li>No → Use general sorting algorithms</li>
        </ul>
    </li>
    <li>
        <strong>Sort a fixed number of elements extremely fast</strong>
        <ul>
            <li>Yes → <em>Sorting Networks (Bitonic, Odd-Even, Pairwise Sort)</em></li>
            <li>No → Use traditional algorithms</li>
        </ul>
    </li>
    <li>
        <strong>Quantum computing</strong>
        <ul>
            <li>Yes → <em>Use Quantum Sort (Grover’s Algorithm for Min/Max Finding)</em></li>
        </ul>
    </li>
</ul>
	