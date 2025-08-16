'use client';

import React, {useMemo, useRef, useState} from 'react';
import './LoadReport.scss';
import {cn} from '@utils';
import {uploadReportPhotos} from '@/shared/api';

export type LoadReportProps = {
  uploadUrl: string;
  maxFiles?: number;
  name?: string;
  accept?: string;
  className?: string;
  /** Initial urls to show as filled slots */
  initialPreviews?: string[];
  onUploaded?: (response: unknown) => void;
};

export const LoadReport: React.FC<LoadReportProps> = ({
  uploadUrl,
  maxFiles = 3,
  name = 'files',
  accept = 'image/*',
  className,
  initialPreviews = [],
  onUploaded,
}) => {
  const [previews, setPreviews] = useState<string[]>(initialPreviews);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const emptySlots = useMemo(() => {
    const count = Math.max(maxFiles - previews.length, 0);
    return Array.from({length: count});
  }, [maxFiles, previews.length]);

  const handlePickFiles = () => {
    inputRef.current?.click();
  };

  const handleFilesSelected: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const filePreviews = files.map((f) => URL.createObjectURL(f));
    setPreviews((prev) => [...prev, ...filePreviews].slice(0, maxFiles));

    try {
      setIsUploading(true);
      const resp = await uploadReportPhotos(files, uploadUrl, {fieldName: name});
      onUploaded?.(resp);
    } finally {
      setIsUploading(false);
      // Reset value to allow uploading same file twice if needed
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  return (
    <div className={cn('load-report', className)}>
      <div className="load-report__slots" onClick={handlePickFiles} role="button" tabIndex={0}
           onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handlePickFiles(); }}>
        {previews.slice(0, maxFiles).map((src, idx) => (
          <div key={`preview-${idx}`} className={cn('load-report__slot', 'load-report__slot--filled')}>
            <img src={src} alt="report" className="load-report__image" />
          </div>
        ))}
        {emptySlots.map((_, idx) => (
          <div key={`empty-${idx}`} className="load-report__slot" />
        ))}
      </div>

      <button type="button" className="load-report__add" onClick={handlePickFiles} disabled={isUploading}>
        <span className="load-report__plus">+</span>
        <span className="load-report__text">Добавить фото отчет</span>
      </button>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple
        className="load-report__input"
        onChange={handleFilesSelected}
      />
    </div>
  );
};
export default LoadReport;


