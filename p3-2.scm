(define add-multiple-to-list-iter
  (lambda (multiple lst n limit)
    (cond
      ((= n limit) lst)
      ((member? n lst) (add-multiple-to-list-iter multiple lst (+ n multiple) limit))
      (else (add-multiple-to-list-iter multiple (cons n lst) (+ n multiple) limit)))))

(define sieve
  (lambda (n)
    (sieve-iter n 3 (add-multiple-to-list-iter 2 () 2 n))))

(define sieve-iter
  (lambda (limit n notPrimes)
    notPrimes))
