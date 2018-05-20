;(define listofprimes
;  (lambda (n limit primes)
;    (cond
;      ((n 
(define alist '(1 2 3 4))

(define memeber
  (lambda (a b)
    ;(define c (cdr b))
    (cond
      ((null? b) #f )
      ((= (car b) a) #t)
      (else (memeber a (cdr b)) ) )))

(define add-until
  (lambda (n adder limit numbers)
    (cond
      ((> n limit) numbers)
      ((memeber n numbers) (add-until (+ n adder) adder limit numbers))
      (else (add-until (+ n adder) adder limit (cons n numbers))))))

(define sieve
  (lambda (n limit notPrimes primes)
    (cond
	((> n limit) primes)
	((and (= (modulo n 2) 0) (> n 2)) (sieve (+ n 1) limit notPrimes primes))
	((member n notPrimes) (sieve (+ n 1) limit notPrimes primes))
	(else (sieve (+ n 1) limit (add-until n n limit notPrimes) (cons n primes))))))
