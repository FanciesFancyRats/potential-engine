(define add-multiple-to-list-iter
  (lambda (multiple lst n limit)
    (cond
      ((> n limit) lst)
      ((member? n lst) (add-multiple-to-list-iter multiple lst (+ n multiple) limit))
      (else (add-multiple-to-list-iter multiple (cons n lst) (+ n multiple) limit)))))
(define (sieve n)
  (sieve-inter n (add-multiple-to-list-iter 2 () 4 n) '(2 1) 3))

(define sieve-inter 
  (lambda (limit notPrimes primes n)
    (cond
      ((> n limit) primes)
     
      ((member? n  notPrimes) (sieve-inter limit notPrimes primes (+ n 2)))
      ;(else (sieve-inter limit notPrimes primes (+ n 2))))))
      (else (sieve-inter limit (add-multiple-to-list-iter n notPrimes (+ n n) limit) (cons n primes) (+ n 2))))))

